const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  providerName: { type: String, required: true },
  serviceType: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  phone: String,
  email: String,
  status: { type: String, default: 'Active' },
  notes: String,
});

module.exports = mongoose.model('Provider', providerSchema);
