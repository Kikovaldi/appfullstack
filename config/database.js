//crear conexión con base de datos
//importar dotenv
//importar mysql2
//crear 4 variables de entorno trer en el env y traerlas desde el env host, user, password y name de la base de datos
// crear un pool
// exportar el pool.promise

require("dotenv").config()
const mysql = require("mysql2")

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME


const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})


module.exports = pool.promise();
