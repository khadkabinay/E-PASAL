const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} = require("../controllers/userController");
const { protectRoute } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protectRoute, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

module.exports = router;
