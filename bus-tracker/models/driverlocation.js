// models/driverLocation.js

const mongoose = require('mongoose');

// Define the schema for storing driver location
const driverLocationSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create the model from the schema
const DriverLocation = mongoose.model('DriverLocation', driverLocationSchema);

module.exports = DriverLocation;
