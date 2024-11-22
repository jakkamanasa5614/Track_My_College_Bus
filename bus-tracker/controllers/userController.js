// controllers/userController.js

const User = require('../models/user'); // Adjust the model path if needed

// Example controller function to get user data (you can expand this as needed)
exports.getUser = async (req, res) => {
  try {
    const users = await User.find(); // You can adjust this to your query
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body); // Assuming body contains user data
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
};
