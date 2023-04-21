// controllers/weather.js
const Weather = require('../models/weather');

// GET /weather
const getWeather = (req, res) => {
  Weather.find({}, (err, allWeather) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while retrieving weather data');
    } else {
      res.render('weather/index', { weather: allWeather });
    }
  });
};

// POST /weather
const createWeather = (req, res) => {
  const newWeather = new Weather(req.body);
  newWeather.save((err, savedWeather) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while creating weather data');
    } else {
      res.redirect('/weather');
    }
  });
};

// routes/weather.js
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather');

router.get('/', weatherController.getWeather);
router.post('/', weatherController.createWeather);

module.exports = router;
