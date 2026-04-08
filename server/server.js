require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

const providerRoutes = require('./routes/providers');
app.use('/api/providers', providerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {});
