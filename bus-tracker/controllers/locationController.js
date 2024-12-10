// controllers/locationController.js

// This function will handle the '/location' route
exports.getLocation = (req, res) => {
    // Your logic to get the bus location (replace with your actual logic)
    res.json({ location: 'Bus is at XYZ' });
};
// controllers/locationController.js
exports.updateLocation = (req, res) => {
    // Logic to update the location
    res.json({ message: 'Bus location updated successfully' });
};
