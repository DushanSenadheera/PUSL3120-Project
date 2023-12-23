const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.get('/user', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;