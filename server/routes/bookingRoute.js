const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingSchema');
const nodemailer = require('nodemailer');


router.get('/booking', (req, res) => {
    Booking.find({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'recruitnsbm@gmail.com',
      pass: 'sllkozacqwzyfxwb'
    }
  });
  

router.post('/booking/add', (req, res) => {
       
    const {email , movie ,date , time , seats ,total} = req.body;

    const booking = new Booking({
        email: req.body.email,
        movie: req.body.movie,
        date: req.body.date,
        time: req.body.time,
        seats: req.body.seats,
        total: req.body.total,
    });

    booking.save().then(() => {
        console.log('booking added');
        const mailData = `${email} have booked ${seats} seats on ${movie}. Total Amount is ${total}. Thank You!!`;    
        
    var mailOptions = {
        from: 'abccinemaadmn@gmail.com',
        to: email,
        subject: ' Booking Confirm Mail',
        text: mailData
      };transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    }).catch((err) => {
        console.log(err);
    });
} );

router.put('/booking/update/:id', (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        movie: req.body.movie,
        date: req.body.date,
        time: req.body.time,
        seats: req.body.seats,
        total: req.body.total,
    }).then(() => {
        console.log('booking updated');
    }).catch((err) => {
        console.log(err);
    });
});

router.delete('/booking/delete/:id', (req, res) => {
    Booking.findByIdAndDelete(req.params.id).then(() => {
        console.log('booking deleted');
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;