import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create order
router.post("/create", protect, async (req, res) => {
  try {
    console.log("Create order request received");
    console.log("User:", req.user);
    console.log("Request body:", req.body);

    const {
      products,
      shippingAddress,
      paymentMethod,
      subtotal,
      shipping,
      tax,
      totalAmount
    } = req.body;

    // Validate required fields
    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products in order"
      });
    }

    const order = await Order.create({
      user: req.user.id,
      products: products,
      shippingAddress,
      paymentMethod,
      subtotal,
      shipping,
      tax,
      totalAmount
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get user orders
router.get("/myorders", protect, async (req, res) => {
  try {
    console.log("Fetching orders for user:", req.user.id);
    
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    console.log(`Found ${orders.length} orders`);
    
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get single order
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }
    
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized"
      });
    }
    
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;