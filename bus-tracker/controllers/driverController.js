const DriverLocation = require('./models/driverlocation');

exports.updateLocation = async (req, res) => {
  const { driverId, latitude, longitude } = req.body;

  try {
    if (!driverId || !latitude || !longitude) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedLocation = await DriverLocation.findOneAndUpdate(
      { driverId },
      { latitude, longitude },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Location updated successfully', data: updatedLocation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLocation = async (req, res) => {
  const { driverId } = req.params;

  try {
    const location = await DriverLocation.findOne({ driverId });
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.status(200).json({ data: location });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
// controllers/driverController.js

exports.getLocation = (req, res) => {
    // Assuming you're fetching the location from a database or some storage
    const locationData = {
      busId: "123",
      latitude: 12.9716,
      longitude: 77.5946,
      timestamp: "2024-11-21T10:30:00Z"
    };
    res.json(locationData); // Send location data back to the client
  };
  
  exports.updateLocation = (req, res) => {
    const { busId, latitude, longitude, timestamp } = req.body;
    // Here you would typically save this data to the database
    console.log("Updated Location:", { busId, latitude, longitude, timestamp });
    
    // Send a response confirming the update
    res.json({ message: "Bus location updated successfully" });
  };
  
