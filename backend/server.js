import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// 🌐 DNS fix (Render/Mongo stability)
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// 🔥 Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://reduxtoolkit-ecommerce1.netlify.app"
];

// ✅ CORS FIX (Production + Local)
app.use(
  cors({
    origin: function (origin, callback) {
      // allow Postman / server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS blocked"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// ⚡ IMPORTANT FIX (Render crash fix)
app.options(/.*/, cors());

// 📦 JSON parser
app.use(express.json());

// 🧾 Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 🔐 Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// 🧪 Test API
app.get("/api/test", (req, res) => {
  res.json({ message: "API working fine 🚀" });
});

// 🗄️ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// 🚀 Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});