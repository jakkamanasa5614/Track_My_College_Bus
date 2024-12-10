const mongoose = require('mongoose');

const busLocationSchema = new mongoose.Schema({
    busNumber: { type: String, required: true },
    driverName: { type: String, required: true },
    route: { type: String, required: true },
    locationUrl: { type: String, required: true },
    locationLat: { type: Number, required: true },  // latitude
    locationLng: { type: Number, required: true },  // longitude
    busStops: [String]
});

const BusLocation = mongoose.model('BusLocation', busLocationSchema);

module.exports = BusLocation;
