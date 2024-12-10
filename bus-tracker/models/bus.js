// models/bus.js
const mongoose = require('mongoose');

// Bus schema definition
const busSchema = new mongoose.Schema({
  busId: { type: String, required: true },          // Unique bus identifier
  locationLat: { type: Number, required: true },     // Latitude of the bus
  locationLng: { type: Number, required: true },     // Longitude of the bus
  // You can add more fields like bus name, driver, etc.
});

// Create and export the Bus model
const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
