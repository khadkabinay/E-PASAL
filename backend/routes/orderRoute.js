const express = require("express");
const router = express.Router();
const { addOrderItems } = require("../controllers/orderController");
const { protectRoute } = require("../middleware/authMiddleware");

router.route("/").post(protectRoute, addOrderItems);

module.exports = router;
