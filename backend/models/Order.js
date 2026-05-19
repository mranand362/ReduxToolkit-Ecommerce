import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  products: [{
    id: String,
    title: String,
    price: Number,
    quantity: Number,
    thumbnail: String
  }],
  shippingAddress: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    street: String,
    city: String,
    postalCode: String,
    state: String,
    country: {
      type: String,
      default: "United States"
    }
  },
  paymentMethod: {
    type: String,
    default: "Card"
  },
  subtotal: Number,
  shipping: Number,
  tax: Number,
  totalAmount: Number,
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending"
  }
}, {
  timestamps: true
});

export default mongoose.model("Order", orderSchema);