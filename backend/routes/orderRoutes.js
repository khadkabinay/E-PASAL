const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require("../controllers/orderController");
const { protectRoute, admin } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protectRoute, addOrderItems)
  .get(protectRoute, admin, getOrders);
router.route("/myorders").get(protectRoute, getMyOrders);
router.route("/:id").get(protectRoute, getOrderById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);
router.route("/:id/deliver").put(protectRoute, admin, updateOrderToDelivered);

module.exports = router;
