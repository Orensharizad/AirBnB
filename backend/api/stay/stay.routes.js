const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getStays, getStayById, addStay, updateStay, removeStay } = require('./stay.controller')
const router = express.Router()

router.get('/', getStays)
router.get('/:stayId', getStayById)
router.post('/', requireAuth, addStay)
router.put('/:stayId', requireAuth, updateStay)
router.delete('/:stayId', requireAuth, removeStay)

module.exports = router