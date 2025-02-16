const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json("User already exists");

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json("User registered successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Login User & Generate JWT Token
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user in DB
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("Invalid credentials");

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Invalid credentials");

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
