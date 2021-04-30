const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { authUser, getUserProfile } = require("../controllers/userController");

router.post("/login", authUser);
router.get("/profile", getUserProfile);

module.exports = router;
