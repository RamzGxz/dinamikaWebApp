const conn = require('../db/db')

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
                res.status(200).send({
                    pesan: "login berhasil",
                    data: data
                })
                console.log('login success!')
            } else {
                res.status(401).send({
                    pesan: "maaf username atau password salah"
                })
                console.log('login error!')
            }
        })
    }
}