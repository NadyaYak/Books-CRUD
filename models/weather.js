const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city:  { type: String, required: true },
    temperature:  { type: Number, required: true },
    description: { type: String, required: true }
});


const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;