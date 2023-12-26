const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.post('/login', (req, res) => {
  const userId = req.body.id;
  const userPassword = req.body.password;

  User.findOne({
    userName: userId,
    password: userPassword
  }).then((user) => {
    if (user) {
      res.send('user login success');
    } else {
      res.send('user login failed');
    }
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/sign', (req, res) => {
  const user = new User({
    userName: req.body.id,
    password: req.body.password,
  });

  user.save().then(() => {
    console.log('user account created');
  }).catch((err) => {
    console.log(err);
  });
});

router.put('/update', (req, res) => {
  const userId = req.body.id;
  const password = req.body.password
 
  //find user by id and update password
  User.findOneAndUpdate({
    userName: userId
  }, {
    password: password
  }).then(() => {
    console.log('user password updated');
  }).catch((err) => {
    console.log(err);
  });
});

router.delete('/delete', (req, res) => {
  const userId = req.body.id;

  User.findOneAndDelete({
    userName: userId
  }).then(() => {
    console.log('user profile deleted');
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;