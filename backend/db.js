require('dotenv').config()

const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: "root",
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'mathmaze'
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err)
        return
    }
})

module.exports = db