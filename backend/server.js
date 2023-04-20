const express = require('express')
const routerStock = require('./router/routeStock')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 4444


app.use(routerStock)

app.listen(port,()=>{
    console.log(`server listed on http://localhost:${port}`)
})