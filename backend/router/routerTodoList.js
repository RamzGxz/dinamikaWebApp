const express = require('express')
const todoListContoller = require('../controller/todoListController')
const routerTodo = express.Router()

routerTodo.get('/getTodo', todoListContoller.getTodo)
routerTodo.post('/addTodo', todoListContoller.addTodo)

module.exports = routerTodo