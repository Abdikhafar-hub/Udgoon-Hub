const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json("User already exists");

    
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json("User registered successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
});


router.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json("Invalid credentials");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json("Invalid credentials");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

      res.status(200).json({ user, token, refreshToken });
  } catch (error) {
      res.status(500).json(error.message);
  }
});


router.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
      return res.status(403).json({ message: "Refresh token required" });
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
          return res.status(403).json({ message: "Invalid refresh token" });
      }

      const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ accessToken: newAccessToken });
  });
});


module.exports = router;
