const express = require('express')
const cors = require('cors')
const routerStock = require('./router/routeStock')
const routerTodo = require('./router/routerTodoList')
const routerUser = require('./router/routerUser')
const app = express()
app.use(express.json())
app.use(cors())
const port = 4444


app.use(routerStock)
app.use(routerTodo)
app.use(routerUser)

app.listen(port,()=>{
    console.log(`server listed on http://localhost:${port}`)
})