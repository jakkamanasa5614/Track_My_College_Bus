const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    routeName: String,
    startPoint: String,
    endPoint: String,
    stops: [String],  // Array of stops
    driverName: String
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
