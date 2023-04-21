// controllers/user.js
const User = require('../models/user');

// GET /users
const getUsers = (req, res) => {
  User.find({}, (err, allUsers) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while retrieving user data');
    } else {
      res.render('users/index', { users: allUsers });
    }
  });
};

// POST /users
const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, savedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while creating user data');
    } else {
      res.redirect('/users');
    }
  });
};

// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
