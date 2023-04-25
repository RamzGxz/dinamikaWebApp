const conn = require('../db/db')

module.exports = {
    getTodo: (req, res) => {
        const query = 'select * from todoList'
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    addTodo: (req, res) => {
        const textVal = req.body.text
        const query = `insert into todoList(text) values('${textVal}')`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    delTodo: (req, res) => {
        const id = req.params.id
        const query = `delete from todoList where id=${id}`
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    }
}