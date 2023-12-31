const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingSchema');

router.get('/booking', (req, res) => {
    Booking.find({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/booking/add', (req, res) => {
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