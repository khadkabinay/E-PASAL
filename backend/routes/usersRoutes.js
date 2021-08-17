const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");
const { protectRoute, admin } = require("../middleware/authMiddleware");

// Routes
router.route("/").post(registerUser).get(protectRoute, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router
  .route("/:id")
  .delete(protectRoute, admin, deleteUser)
  .get(protectRoute, admin, getUserById)
  .put(protectRoute, admin, updateUser);

module.exports = router;
