const blacklistModel = require("../models/blacklist.model.js");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache.js");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const blacklistedToken = await redis.get(token);
  if (blacklistedToken) {
    return res.status(401).json({ message: "Token has been blacklisted" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken };
