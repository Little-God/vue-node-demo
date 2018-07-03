var db = require('../configs/db')
var mysql = require('mysql');

let pool = mysql.createPool(db)

module.exports = {
    fetchAll(req,res){
        pool.getConnection((err,connection) => {
            connection.query('select * from goods',(err,rows)=>{
                res.json({code:200,msg:'ok',goods:rows})
                connection.release();
            })
        })
    },
    addOne(req,res){
        let id = req.body.goods_id;
        console.log(req.body)
        let goods_name = req.body.goods_name;
        let goods_price = req.body.goods_price;
        let query,arr

        if(id){
            query = 'update goods set goods_name=?,goods_price=? where goods_id=?'
            arr = [goods_name,goods_price,id]
        }else{
            query = 'insert into goods(goods_name,goods_price) values (?,?)'
            arr = [goods_name,goods_price]
        }

        pool.getConnection((err,connection) => {
            connection.query(query,arr,(err,rows)=>{
                res.send({code:200,msg:'done'})
                connection.release();
            })
        })
    },
    deletegoods(req,res){
        let id = req.body.goods_id;
        console.log(id)
        pool.getConnection((err,connection) => {
            connection.query('delete from goods where goods_id = ?',[id],(err,rows)=>{
                res.send({code:200,msg:'done'})
                connection.release();
            })
        })
    }
}