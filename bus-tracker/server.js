require('dotenv').config();




// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./Routes/authRoutes');  // existing auth routes
const driverRoutes = require('./routes/driverRoutes');  // new driver routes
const userRoutes = require('./routes/userRoutes');
dotenv.config(); // Loads environment variables from .env file

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend access

// Routes

app.use('/api', userRoutes); 
// Existing auth routes
app.use('/api/auth', authRoutes);

// New driver routes for location
app.use('/api/drivers', driverRoutes);
app.get('/location', getLocation);

// Define the POST route for '/location'
app.post('/location', updateLocation);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://manasamanu1775857:zMFjrGfxNCvzWzse@trackmybuscluster.cngxc.mongodb.net/?retryWrites=true&w=majority&appName=TrackMyBusCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Track My Bus API');
});

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
