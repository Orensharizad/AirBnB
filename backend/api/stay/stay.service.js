const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function query() {
    try {
        let namePart = criteria.name || ''
        let query = `SELECT * FROM stay  WHERE stay.name LIKE '%${namePart}%' OR stay.description LIKE '%${namePart}%'`
        return dbService.runSQL(query)
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }
}

async function getById(stayId) {
    try {
        let query = `SELECT * FROM stay WHERE stay._id = ${stayId}`
        let stays = await dbService.runSQL(query)
        if (stays.length === 1) return stays[0]
        throw new Error(`stay id ${stayId} not found`)
    } catch (err) {
        logger.error(`while finding stay ${stayId}`, err)
        throw err
    }
}

async function remove(stayId) {
    try {
        let query = `DELETE FROM stay WHERE stay._id = ${stayId}`
        const okPacket = await dbService.runSQL(query)
        return okPacket.affectedRows === 1 ? okPacket : Promise.reject(new Error(`No stay deleted - stay id ${stayId}`))
    } catch (err) {
        logger.error(`cannot remove stay ${stayId}`, err)
        throw err
    }
}

async function add(stay) {
    try {
        let sqlCmd = `INSERT INTO stay (name, description) 
        VALUES ("${stay.name}",
                "${stay.description}",
                "${stay.severity}",
                "${stay.creator}")`
        return dbService.runSQL(sqlCmd)
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
}

async function update(stay) {
    try {
        let query = `UPDATE stay set name = "${stay.name}",
        description = "${stay.description}",
WHERE stay._id = ${stay._id}`
        let okPacket = await dbService.runSQL(query)
        if (okPacket.affectedRows !== 0) return okPacket
        throw new Error(`No stay updated - stay id ${stay._id}`)
    } catch (err) {
        logger.error(`cannot update stay ${stay._id}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}
