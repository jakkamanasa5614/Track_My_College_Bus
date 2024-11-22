const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController'); // Ensure this path is correct

// Log the imported controller
console.log(driverController); 

// Test the functions individually
console.log('Update Location Function:', driverController.updateLocation);
console.log('Get Location Function:', driverController.getLocation);

// Route to update driver's location
router.get('/location', getLocation);

// Route for updating location
router.post('/location', updateLocation)

module.exports = router;
