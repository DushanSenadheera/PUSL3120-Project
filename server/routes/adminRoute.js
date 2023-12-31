const express = require('express');
const router = express.Router();
const Admin = require('../models/adminSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/createAdmin', (req, res) => {

  const password = req.body.password;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds).then(function (hash) {
    hashedPassword = hash;

    const admin = new Admin({
      email: req.body.email,
      password: hashedPassword,
    });

    admin.save().then(() => {
      console.log('Admin account created');
    }).catch((err) => {
      console.log(err);
    });
  });
});

router.post('/admin', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email: email }).then((admin) => {
    if (admin) {
      bcrypt.compare(password, admin.password).then(function (result) {
        if (result) {
          const token = jwt.sign({
            email: user.email,
          }, process.env.JWT_KEY, {
            expiresIn: "1h"
          });
          res.send({
            token: token,
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

module.exports = router;