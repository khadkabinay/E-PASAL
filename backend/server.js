const express = require('express')
const app = express()
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoute')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()
app.get('/', (req, res) =>{
    res.send('API is running ...')
})

app.use('/api/products', productRoutes)


app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))