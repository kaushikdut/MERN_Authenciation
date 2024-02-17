const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
