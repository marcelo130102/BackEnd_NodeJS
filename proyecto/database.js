const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'marcelo',
    password: '1301200224012004Mss',
    database: 'test'
})

/*connection.query('SELECT * FROM movies', function(error, result){
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log(result)
    }
}) */


function query (sql, data){
    return new Promise((resolve, reject)=>{
        connection.query(sql,data, function(error, result){
            if(error){
                reject(error.sqlMessage)
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports = query;

//query('SELECT * FROM movies')
//.then((results)=>{console.log(results)})
//.catch((error)=>{console.log(error)})