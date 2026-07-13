const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Driver Route Working",
  });
});

module.exports = router;