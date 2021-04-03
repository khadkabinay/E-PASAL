const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()
app.get('/', (req, res) =>{
    res.send('API is running ...')
})



app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))