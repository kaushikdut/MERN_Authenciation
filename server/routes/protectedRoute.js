const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", verifyToken, (res, req) => {
  res.status(200).json({ message: "Protected route accessed" });
});

module.exports = router;
