const userModel = require("../models/user.model.js");
const blacklistModel = require("../models/blacklist.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const redis = require("../config/cache.js");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.cookie("token", token);

    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

const getMe = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error });
  }
};

const logoutUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  redis.set(token, Date.now().toString(), "EX", 3600);

  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};

module.exports = { registerUser, loginUser, getMe, logoutUser };
