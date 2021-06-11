const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
} = require("../controllers/orderController");
const { protectRoute } = require("../middleware/authMiddleware");

router.route("/").post(protectRoute, addOrderItems);
router.route("/:id").get(protectRoute, getOrderById);

module.exports = router;
