const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getStays, getStayById, addStay, updateStay, removeStay, removeGroupFromStay } = require('./stay.controller')
const router = express.Router()

router.get('/', getStays)

router.get('/:stayId', getStayById)
router.post('/', requireAuth, addStay)
router.put('/:stayId', requireAuth, updateStay)
router.delete('/:stayId', requireAuth, removeStay)
router.delete('/:stayId/:groupId', requireAuth, removeGroupFromStay)

module.exports = router