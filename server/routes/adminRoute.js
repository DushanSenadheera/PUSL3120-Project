const express = require('express');
const router = express.Router();
const Admin = require('../models/adminSchema');
const jwt = require('jsonwebtoken');

router.post('/admin', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({
    email: email,
    password: password
  }).then((admin) => {
    if (admin) {
      const token = jwt.sign({
        email: admin.email,
      }, process.env.JWT_KEY, {
        expiresIn: "1h"
      });
      res.send({
        token: token
      });
    } else {
      req.status(401);
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;