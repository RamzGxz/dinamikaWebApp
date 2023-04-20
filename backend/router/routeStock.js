const express = require('express')
const stockController = require('../controller/stockController')


const routeStock = express.Router()

routeStock.get('/getStock', stockController.getDataStock)
routeStock.get('/getStock/:id', stockController.getStockById)
routeStock.get('/getJumlahStock', stockController.getJumlahStock)
routeStock.post('/addStock', stockController.postStock)
routeStock.put('/updateStock/:id', stockController.updateStock)
routeStock.delete('/delete/:id', stockController.deleteStock)

module.exports = routeStock

