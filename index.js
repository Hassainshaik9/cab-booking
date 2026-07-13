console.log("Index.js started");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =======================
// MongoDB Connection
// =======================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err.message);
  });

// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.send("🚖 Cab Booking Backend Running...");
});

// =======================
// Book Ride API
// =======================

app.post("/bookride", async (req, res) => {
  try {
    const { name, mobile, pickup, stop, destination } = req.body;

    console.log("========== New Booking ==========");
    console.log("Name :", name);
    console.log("Mobile :", mobile);
    console.log("Pickup :", pickup);
    console.log("Stop :", stop);
    console.log("Destination :", destination);
    console.log("=================================");

    res.status(200).json({
      success: true,
      message: "Ride Booked Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// =======================
// Start Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});