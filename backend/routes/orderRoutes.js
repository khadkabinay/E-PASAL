const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controllers/orderController");
const { protectRoute } = require("../middleware/authMiddleware");

router.route("/").post(protectRoute, addOrderItems);
router.route("/myorders").get(protectRoute, getMyOrders);
router.route("/:id").get(protectRoute, getOrderById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);

module.exports = router;
