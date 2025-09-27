require('dotenv').config()

const express = require('express')
const authRoutes = require('./routes/auth')
const emailRoutes = require('./routes/email')

const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/email', emailRoutes)

app.get('/', (req, res) => {
    
})

app.listen(port, () => {
    
})