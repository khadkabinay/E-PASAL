const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')


//@desc Fetch all products
router.get('/', asyncHandler (async (req, res) => {
        const products = await Product.find({})
        res.json(products)
}))


//@desc Fetch single product
router.get('/:id', asyncHandler(async (req, res) =>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        }else{
            res.status(404).json({message:'Product not found'})
        }
}))


module.exports = router