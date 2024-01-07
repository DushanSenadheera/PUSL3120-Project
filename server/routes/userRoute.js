const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../services/auth')

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const token = jwt.sign({
            email: user.email,
            fName: user.fName
          }, process.env.JWT_KEY, {
            expiresIn: "1h"
          });
          res.send({
            token: token,
            email: email,
          });
        } else {
          res.status(401).send('Invalid Password');
        }
      });
    } else {
      res.status(401).send('Invalid Email');
    }
  });
});

router.post('/sign', (req, res) => {

  const password = req.body.password;
  const saltRounds = 10;
  
  bcrypt.hash(password, saltRounds).then(function (hash) {
    
    const hashedPassword = hash;

    const user = new User({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      password: hashedPassword,
      mobile: req.body.mobile,
    });

    user.save().then(() => {
      console.log('user account created');
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
    });
  });
});

router.put('/update', (req, res) => {
  const email = req.body.email;
  const password = req.body.password

  bcrypt.hash(password, saltRounds).then(function (hash) {
    hashedPassword = hash;

    User.findOneAndUpdate({
      email: email
    }, {
      password: password
    }).then(() => {
      console.log('user password updated');
    }).catch((err) => {
      console.log(err);
    });
  });


});

router.delete('/delete', (req, res) => {
  const email = req.body.email;

  User.findOneAndDelete({
    email: email
  }).then(() => {
    console.log('user profile deleted');
  }).catch((err) => {
    console.log(err);
  });
});


router.get('/currentuser', auth, (req, res) => {
  // Extracting the email from the JWT token after authentication
  const userEmail = req.user.email;

  // Find the user in the database and return the user details
  User.findOne({ email: userEmail }).then((user) => {
    if (user) {
      const { fName, lName, email, password, mobile } = user;
      res.json({ fName, lName, email, password, mobile });
    } else {
      res.status(404).send('User not found');
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err.message);
  });
});


module.exports = router;