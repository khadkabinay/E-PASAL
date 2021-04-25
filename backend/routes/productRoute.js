const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const {getProducts, getProductById } = require('../controllers/productController')


router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


module.exports = router