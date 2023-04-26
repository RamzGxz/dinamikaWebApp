const jwt = require('jsonwebtoken')
const secretKey = 'dinamikaWebApp'

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(401).send({pesan: 'maaf token tidak ditemukan'})
    jwt.verify(token, secretKey, (err, user)=>{
        if(err) return res.status(301).send({pesan: 'token tidak ditemukan'})
        req.user = user
        next()
    })
}

module.exports = verifyToken