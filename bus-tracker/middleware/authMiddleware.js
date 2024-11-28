// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Authenticate any user
exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Authenticate drivers
exports.authenticateDriver = (req, res, next) => {
  this.authenticateUser(req, res, () => {
    if (req.user.role !== 'driver') {
      return res.status(403).json({ message: 'Access denied. Driver role required.' });
    }
    next();
  });
};
