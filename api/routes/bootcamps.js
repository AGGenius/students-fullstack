const express = require('express')

const pool = require('../startup/db.js')()

const router = express.Router()

router.get('/', async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM bootcamps'

		const [bootcamps] = await pool.query(sql)

		res.json(bootcamps)
	} catch (err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const { title } = req.body

		const sql = `INSERT INTO bootcamps (Title) VALUES (?)`

		const [results] = await pool.query(sql, [title])

		res.json({ IDBootcamp: results.insertId, Title: title })
	} catch (err) {
		next(err)
	}
})

module.exports = router
