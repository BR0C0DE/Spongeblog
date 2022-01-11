// Connecting user and post routes and exporting
const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./postRoutes.js'))

module.exports = router
