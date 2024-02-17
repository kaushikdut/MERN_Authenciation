const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();
const multer = require("multer");
const Photo = require("../models/photo");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", verifyToken, (res, req) => {
  res.status(200).json({ message: "Protected route accessed" });
});

router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/upload", upload.single("photo"), async (req, res) => {
  try {
    const { originalName, buffer } = req.file;

    //Saving the photo to MongoDb
    const photo = Photo({ name: originalName, data: buffer });
    await photo.save();

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
