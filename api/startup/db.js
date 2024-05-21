const mysql = require('mysql2/promise')

const { DB_HOST, DB_USER, DB_DATABASE } = process.env

const pool = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	database: DB_DATABASE,
})

module.exports = function () {
	return pool
}
