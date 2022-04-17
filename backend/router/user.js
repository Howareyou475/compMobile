const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.post('/api/v1/user/register', userController.register)
router.post('/api/v1/user/login', userController.login)

module.exports = router
