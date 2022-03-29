const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const {
  getProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");
const { protectRoute, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protectRoute, admin, deleteProduct);

module.exports = router;
