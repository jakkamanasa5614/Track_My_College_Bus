// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route for fetching all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Route for creating a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;
