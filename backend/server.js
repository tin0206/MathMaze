require('dotenv').config()

const express = require('express')
const authRoutes = require('./routes/auth')

const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    
})

app.listen(port, () => {
    
})