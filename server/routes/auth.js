const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }

    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltrounds);
    console.log(hashedPassword);

    const newUser = User({ username, password: hashedPassword });

    newUser.save();
    res.status(201).json({ message: "User added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, MY_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch {
    res.status(500).json({ error: "Internal Error" });
  }
});

module.exports = router;
