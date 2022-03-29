const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//@desc Fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch a single product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

//@desc delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product remove()" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = { getProducts, getProductById, deleteProduct };
