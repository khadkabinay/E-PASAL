const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { authUser, getUserProfile } = require("../controllers/userController");
const protectRoute = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.get("/profile", protectRoute, getUserProfile);

module.exports = router;
