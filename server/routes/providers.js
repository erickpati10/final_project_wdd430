const express = require('express');
const router = express.Router();
const Provider = require('../models/provider');

router.post('/', async (req, res) => {
  try {
    const provider = new Provider(req.body);
    const savedProvider = await provider.save();

    console.log('Saved provider:', savedProvider);
    res.status(201).json(savedProvider);
  } catch (error) {
    console.error('POST error:', error);
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.json(provider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProvider = await Provider.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProvider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    res.json(updatedProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedProvider = await Provider.findByIdAndDelete(req.params.id);

    if (!deletedProvider) {
      return res.status(404).json({ message: 'Provider not found' });
    }

    res.json({ message: 'Provider deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
