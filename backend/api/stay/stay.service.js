const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('stay')
        const stays = await collection.find().toArray()
        return stays
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = await collection.findOne({ _id: ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding stay ${stayId}`, err)
        throw err
    }
}

async function remove(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.deleteOne({ _id: ObjectId(stayId) })
        return stayId
    } catch (err) {
        logger.error(`cannot remove stay ${stayId}`, err)
        throw err
    }
}

async function add(stay) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.insertOne(stay)
        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
}

async function update(stay) {
    try {
        const stayToSave = JSON.parse(JSON.stringify((stay)))
        // const stayToSave = structuredClone(stay)
        delete stayToSave._id
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: ObjectId(stay._id) }, { $set: stayToSave })
        return stay
    } catch (err) {
        logger.error(`cannot update stay ${stay._id}`, err)
        throw err
    }
}

async function removeGroupFromStay(stayId, groupId) {
    try {
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: ObjectId(stayId) }, { $pull: { 'groups': { '_id': groupId } } })
        return groupId
    } catch (err) {
        logger.error(`cannot remove group ${groupId}`, err)
        throw err
    }
}

async function getAiStayFromChat(prompt) {
    try {
        const script = await dbService.getStayScript(prompt)
        const lines = script.split('\n')
        const groups = lines.reduce((acc, line) => {
            if (line.includes('$') && !line.includes('Object')) {
                const group = { groupTitle: _removeSpecialChars(line), tasks: [] }
                acc.push(group)
            } else if (line.includes('∞')) {
                acc[acc.length - 1].tasks.push(_removeSpecialChars(line))
            }
            return acc
        }, [])
        var counter = 0
        const newGroups = await Promise.all(groups.map(async group => {
            const newGroup = _createAiGroup(group.groupTitle)
            newGroup.tasksId = await Promise.all(group.tasks.map(async (task, idx) => {
                const taskFromMongo = await Promise.resolve(taskService.add(_createAiTask(task, newGroup._id,
                    Math.floor((Math.random() * 2)) === 0 ? colors[counter++] : images[counter++]
                )))
                return taskFromMongo._id
            }))
            return newGroup
        }))
        const aiStay = _createAiStay(`${prompt.prompt}`, newGroups)
        const aiStayWithId = await add(aiStay)
        return await getById(aiStayWithId._id)

    } catch (err) {
        console.log('err from getiin ai in stay sevice', err)
        throw err
    }
}

function _removeSpecialChars(str) {
    return str.replace(/(?!\w|\s)./g, '')
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')
}

function _createAiStay(title, groups = []) {
    return {
        title,
        isstarred: false,
        groups,
        activities: [],
        labels: [
            {
                "_id": "l101",
                "title": "Done",
                "color": "#d6ecd2"
            },
            {
                "_id": "l102",
                "title": "Progress",
                "color": "#fbf3c0"
            },
            {
                "_id": "l103",
                "title": "Todo",
                "color": "#fce7c6"
            },
            {
                "_id": "l104",
                "title": "Important",
                "color": "#f5d3ce"
            },
            {
                "_id": "l105",
                "title": "Urgent",
                "color": "#efb3ab"
            },
            {
                "_id": "l106",
                "title": "Later",
                "color": "#dfc0eb"
            },
            {
                "_id": "l107",
                "title": "Basic",
                "color": "#e4f0f6"
            }
        ],
        style: {
            "background": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
        },
        members: [{
            _id: "u101",
            fullname: "Or Dvir",
            username: "Or Dvir",
            imgUrl: "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674737130/Me_q1h5fa.jpg"
        },
        {
            _id: "u102",
            fullname: "Liad Gola",
            username: "Liad Gola",
            imgUrl: "https://res.cloudinary.com/dug85f2rg/image/upload/v1674737415/liad_tveksl.jpg"
        },
        {
            _id: "u103",
            fullname: "Oren Sharizad",
            username: "Oren Sharizad",
            imgUrl: "https://res.cloudinary.com/dsvs2bgn4/image/upload/v1674479066/main_aq4l31.jpg"
        }],
    }
}
function _createAiGroup(title) {
    return {
        _id: utilService.makeId(),
        title,
        tasksId: [],
        style: {},
        archivedAt: null
    }
}

function _createAiTask(title, groupId, background) {
    if (!background) background = ''
    return {
        "title": title,
        "archivedAt": Date.now(),
        "description": "",
        "comments": [],
        "checklists": [],
        "memberIds": [],
        "labelIds": [],
        "dueDate": null,
        "isDone": false,
        "byMember": {
            "_id": "u103",
            "username": "Oren Sharizad",
            "fullname": "Oren Sharizad",
            "imgUrl": "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674737130/Me_q1h5fa.jpg"
        },
        "style": {
            background
        },
        "attachments": [],
        "activity": [],
        groupId,
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const images = [
    'https://res.cloudinary.com/dd09wjwjn/image/upload/v1674723476/wrfbuvied7bglma8gwnj.jpg',
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932365/Software-Development_nwvt9b.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932362/photo-1610563166150-b34df4f3bcd6_xcihun.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932360/Software-Development_1_u9hzft.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932361/Software-Development-Industry_yguihk.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932361/origin_hmen7v.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932360/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196_dll8zz.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932209/Top-6-Software-Development-Methodologies_lj1l9n.jpg",
    'https://res.cloudinary.com/dd09wjwjn/image/upload/v1674724392/nsdjkvajunibmxzwuc7d.png',
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932392/clarity-software-development-architecture_xnjvxl.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932380/Software-development_u0ardw.png",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932360/software-development-and-coding-landing-page_yeo8em.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932368/Your-perfect-development-team-1_kmd8c5.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932366/software-development_2_vtkrg9.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932366/Types-of-Software-Development_xntc98.webp",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932362/Software-Development-Contract_yzckea.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932362/Software-development-skills-to-learn-in-2022_fmddxi.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932360/Career-as-a-software-developer_j2hrke.png",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932359/9-types-of-software-development_oehfpg.jpg",
    "https://res.cloudinary.com/dd09wjwjn/image/upload/v1674932359/images_antr8v.png",
]

const colors = ['#0279C0', '#D29034', '#529839', '#B04632', '#89609E', '#CD5A91', '#4ABF6A', '#06AECC', '#838C91', '#172b4d', '#8c7d20', '#151514', '#0d3728', '#e8e19d', '#f6d5d8', '#e7baa8', '#fdd298']

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
    removeGroupFromStay,
    getAiStayFromChat,
}
