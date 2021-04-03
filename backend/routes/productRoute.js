const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')


router.get('/', async (req, res) =>{
    try {
        const products = await Product.find({})
        res.json(products)
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) =>{

    try {
        const product = products.find(p => p._id === req.params.id)
        res.json(product)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router