const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'marcelo',
    password: '1301200224012004Mss',
    database: 'world'
})

connection.query('SELECT * FROM city', function(error, result){
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log(result)
    }
})