const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email: email,
    password: password
  }).then((user) => {
    if (user) {
      const token = jwt.sign({
        email: user.email,
        fName: user.fName
      }, process.env.JWT_KEY, {
        expiresIn: "1h"
      });
      res.send({
        token: token
      });
    } else {
      res.send('user login failed');
      req.status(401);
    }
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/sign', (req, res) => {
  const user = new User({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.phone,
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