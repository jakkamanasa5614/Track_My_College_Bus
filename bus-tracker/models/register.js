const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../models/student');  // Import the Student model
const Employee = require('../models/employee');  // Import the Employee model

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Check if the user already exists in the database based on role
    let existingUser;
    if (role === 'student') {
      existingUser = await Student.findOne({ username });
    } else if (role === 'employee') {
      existingUser = await Employee.findOne({ username });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    // If user exists, send a response with a 400 status code
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user based on role
    let user;
    if (role === 'student') {
      user = new Student({ username, password, role });
    } else if (role === 'employee') {
      user = new Employee({ username, password, role });
    }

    // Encrypt the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    // Catch any errors and send a 500 status code
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
