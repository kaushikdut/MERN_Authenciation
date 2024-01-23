const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.SERVER_PORT || 8000;
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/authdemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", authRouter);
app.use("/protected", protectedRoute);

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
