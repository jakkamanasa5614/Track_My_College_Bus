const express = require('express');
const Route = require('../models/route'); // Adjust path if needed
const router = express.Router();

// Route to get all bus route information
router.get('/route-info', async (req, res) => {
    try {
        const routes = await Route.find();  // Fetch all bus routes
        res.json(routes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
