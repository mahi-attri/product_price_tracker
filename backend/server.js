const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/myntra');

const priceSchema = new mongoose.Schema({
  priceInt: String,
  time: { type: Date },
  code: String,
  title: String
});

const Price = mongoose.model('Price', priceSchema);

app.get('/prices', async (req, res) => {
  try {
    const prices = await Price.find({}, 'priceInt time code title');
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});