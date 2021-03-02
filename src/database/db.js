const mysql = require('mysql')

const connection = mysql.createConnection({
    adapter: 'mysql',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mutiron',
    port: 3306
})

connection.connect((error) => {
    if (error) {throw error}
    console.log('Conectado!')
})

module.exports = connection