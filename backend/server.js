import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://reduxtoolkit-ecommerce1.netlify.app"
];

// ✅ CORS FIX (Production + Local)
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

// ✅ Preflight support
app.options("*", cors());

app.use(express.json());

// Log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});