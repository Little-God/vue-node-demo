var db = require('../configs/db')
var mysql = require('mysql');

let pool = mysql.createPool(db)

module.exports = {
    testajax(req,res){
        console.log(req.body)
        res.send({code:200,msg:'done'});
    },
    fetchAll(req,res){
        pool.getConnection((err,connection) => {
            connection.query('select * from action',(err,rows)=>{
                res.json({code:200,msg:'ok',goods:rows})
                connection.release();
            })
        })
    },
    addOne(req,res){
        console.log(req.body)
        let id = req.body.id;
        console.log(id)
        let name = '12';
        let region = '12';
        // let date1 = req.body.date1;
        // let date2 = req.body.date2;
        let date = '11月';
        let delivery = 1;
        let type = '123';
        let resource = '12';
        let desc = '12';
        let query,arr

        if(id){
            query = 'update action set name=?,region=?,date=?,delivery=?,type=?,resource=?,desc=? where id=?'
            arr = [name,region,date,delivery,type,resource,desc,id]
        }else{
            query = 'insert into action(name,region,date,delivery,type,resource,desc) values (?,?,?,?,?,?,?)'
            arr = [name,region,date,delivery,type,resource,desc]
        }

        pool.getConnection((err,connection) => {
            connection.query(query,arr,(err,rows)=>{
                res.send({code:200,msg:'done'})
                connection.release();
            })
        })
    },
    deletegoods(req,res){
        let id = req.body.id;
        console.log(id)
        pool.getConnection((err,connection) => {
            connection.query('delete from action where id = ?',[id],(err,rows)=>{
                res.send({code:200,msg:'done'})
                connection.release();
            })
        })
    }
}