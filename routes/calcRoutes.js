const express = require('express')

const { calcView } = require('../controllers/calcController')
const router = express.Router()
router.get('/calc', calcView)

module.exports = router