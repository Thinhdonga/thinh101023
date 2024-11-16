const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy trên port ${PORT}`));