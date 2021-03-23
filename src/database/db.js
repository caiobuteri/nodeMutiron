const mysql = require('mysql')

const connection = mysql.createConnection({
    adapter: 'mysql',
    host: 'u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'opo21mqqi634o46z',
    password: 'ka5k7pbc3rm7gnfv',
    database: 's32jneorx8fi0it1',
    port: 3306
})

connection.connect((error) => {
    if (error) {throw error}
    console.log('Conectado!')
})

module.exports = connection