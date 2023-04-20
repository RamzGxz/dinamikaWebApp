const conn = require('../db/db')


module.exports = {
    getDataStock: (req, res) => {
        const query = 'select * from stock'
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    getStockById: (req, res) => {
        const id = req.params.id
        const query = `select * from stock where id=${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    updateStock: (req, res) => {
        const id = req.params.id
        const kodeBrgVal = req.body.kodeBrg
        const namaBrgVal = req.body.namaBrg
        const hargaBrgVal = req.body.hargaBrg
        const jumlahBrgVal = req.body.jumlahBrg
        const query = `update stock set kodeBrg='${kodeBrgVal}', namaBrg='${namaBrgVal}', hargaBrg=${hargaBrgVal}, jumlahBrg=${jumlahBrgVal} where id=${id}`
        conn.query(query, (err) => {
            if (err) throw err
            res.send({ message: 'data updated!' })
        })
    },
    deleteStock: (req, res) => {
        const id = req.params.id
        const query = `delete from stock where id=${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send('data delete succes')
        })
    },
    getJumlahStock: (req, res) => {
        const query = 'select sum(jumlahBrg) as total from stock'
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    postStock: (req, res)=>{
        const kodeBrgVal = req.body.kodeBrg
        const namaBrgVal = req.body.namaBrg
        const hargaBrgVal = req.body.hargaBrg
        const jumlahBrgVal = req.body.jumlahBrg
        const query = `insert into stock(kodeBrg, namaBrg, hargaBrg, jumlahBrg) values ('${kodeBrgVal}', '${namaBrgVal}', ${hargaBrgVal}, ${jumlahBrgVal})`

        conn.query(query, (err)=>{
            if(err) throw err
            res.send('data posted!')
        })
    }
}