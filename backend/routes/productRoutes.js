const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} = require("../controllers/productController");
const { protectRoute, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts).post(protectRoute, admin, createProduct);
router.route("/:id/reviews").post(protectRoute, createProductReview);
router
  .route("/:id")
  .get(getProductById)
  .delete(protectRoute, admin, deleteProduct)
  .put(protectRoute, admin, updateProduct);

module.exports = router;
