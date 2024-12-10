const BusLocation = require('../models/busLocation');

// POST route for driver to update bus location
const updateBusLocation = async (req, res) => {
  try {
    if (req.user.role !== 'driver') return res.status(403).json({ message: 'Only drivers can post bus location' });

    const { busNumber, latitude, longitude } = req.body;

    const busLocation = new BusLocation({
      busNumber,
      driverId: req.user.id,
      latitude,
      longitude
    });

    await busLocation.save();
    res.status(201).json({ message: 'Bus location updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating bus location' });
  }
};

// GET route for fetching bus location
const getBusLocations = async (req, res) => {
  try {
    const busLocations = await BusLocation.find().populate('driverId', 'name');
    res.status(200).json(busLocations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bus locations' });
  }
};

module.exports = { updateBusLocation, getBusLocations };
