const conn = require('../db/db')
const jwt = require('jsonwebtoken')
const secretKey = 'dinamikaWebApp'

module.exports = {
    getuser: (req, res) => {
        const query = 'select * from user'
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const query = `select * from user where username='${username}' and password='${password}'`
        conn.query(query, (err, data) => {
            if (err) return res.send(err)
            if (data.length === 1) {
                const token = jwt.sign({username: username }, secretKey)
                res.status(200).send({
                    pesan: "login berhasil",
                    token: token
                })
            } else {
                res.status(401).send({
                    pesan: "maaf username atau password salah"
                })
            }
        })
    }
}