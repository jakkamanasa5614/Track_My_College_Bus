const express = require('express');
const router = express.Router();
const { updateBusLocation, getBusLocations } = require('../controllers/busController');
const authenticateUser = require('../middleware/authenticateUser');

// POST route for updating bus location
router.post('/update', authenticateUser, updateBusLocation);

// GET route for fetching all bus locations
router.get('/locations', getBusLocations);

module.exports = router;
