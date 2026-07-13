const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    vehicleNumber: String,
    licenseNumber: String,
    role: {
      type: String,
      default: "driver",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", driverSchema);