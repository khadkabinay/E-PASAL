const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const { authUser } = require('../controllers/userController')


router.post('/login', authUser)

module.exports = router