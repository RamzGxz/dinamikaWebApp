const express = require('express')
const routerUser = express.Router()
const userController = require('../controller/userController')
const verifyToken = require('../modules/verifyToken')

routerUser.get('/getUser', userController.getuser)
routerUser.post('/login', verifyToken, userController.login)


module.exports = routerUser