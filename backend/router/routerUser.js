const express = require('express')
const routerUser = express.Router()
const userController = require('../controller/userController')

routerUser.get('/getUser', userController.getuser)
routerUser.post('/login',userController.login)


module.exports = routerUser