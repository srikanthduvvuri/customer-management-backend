const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./app/config');
const customerRoutes = require('./app/routes/customerRoutes');
//const errorHandler = require('./common/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Customer Management Backend is running');
  });

// Routes
app.use('/api/customers', customerRoutes);

// Error handling middleware
//app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
