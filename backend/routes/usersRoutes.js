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
  deleteUser,
} = require("../controllers/userController");
const { protectRoute, admin } = require("../middleware/authMiddleware");

// Routes
router.route("/").post(registerUser).get(protectRoute, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router.route("/:id").delete(protectRoute, admin, deleteUser);

module.exports = router;
