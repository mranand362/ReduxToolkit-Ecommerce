import Order from "../models/Order.js";

// GET USER ORDERS
export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id; // JWT se aayega

    const orders = await Order.find({ user: userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};