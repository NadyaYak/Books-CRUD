const express = require('express');
const router = express.Router();
const Weather = require('../models/weather');

// Index
router.get('/weather', (req, res) => {
  Weather.find({}, (error, allWeather) => {
    res.render('weather/Index', {
      weather: allWeather,
    });
  });
});

// New
router.get('/weather/new', (req, res) => {
  res.render('weather/New');
});

// Create
router.post('/weather', (req, res) => {
  Weather.create(req.body, (error, createdWeather) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/weather');
    }
  });
});

// Show
router.get('/weather/:id', (req, res) => {
  Weather.findById(req.params.id, (error, foundWeather) => {
    res.render('weather/Show', {
      weather: foundWeather,
    });
  });
});

// Edit
router.get('/weather/:id/edit', (req, res) => {
  Weather.findById(req.params.id, (error, foundWeather) => {
    res.render('weather/Edit', {
      weather: foundWeather,
    });
  });
});

// Update
router.put('/weather/:id', (req, res) => {
  Weather.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedWeather) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect(`/weather/${req.params.id}`);
      }
    }
  );
});

// Delete
router.delete('/weather/:id', (req, res) => {
  Weather.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/weather');
    }
  });
});




app.get('/weather', async (req, res) => {
  try {
    // Fetch the weather data from the API
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=cc0938f5c5704d3c39799aff9a469acc');
    const data = await response.json();

    // Render a view with the weather data
    res.render('weather', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});













module.exports = router;