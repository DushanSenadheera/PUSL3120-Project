const express = require('express');
const router = express.Router();
const Upcoming = require('../models/upcomingSchema');

router.get('/upcoming', (req, res) => {
    Upcoming.find({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/upcoming/add', (req, res) => {
    const upcoming = new Upcoming({
        movie: req.body.movie,
        directorName: req.body.directorName,
        catergory: req.body.catergory,
        cast: req.body.cast,
        description: req.body.description,
        poster: req.body.poster,
        background: req.body.background,
        link: req.body.link
    });

    upcoming.save().then(() => {
        console.log('upcoming added');
    }).catch((err) => {
        console.log(err);
    });
} );

router.put('/upcoming/update/:id', (req, res) => {
    Upcoming.findByIdAndUpdate(req.params.id, {
        movie: req.body.movie,
        directorName: req.body.directorName,
        catergory: req.body.catergory,
        cast: req.body.cast,
        description: req.body.description,
        poster: req.body.poster,
        background: req.body.background,
        link: req.body.link,
    }).then(() => {
        console.log('upcoming updated');
    }).catch((err) => {
        console.log(err);
    });
});

router.delete('/upcoming/delete/:id', (req, res) => {
    Upcoming.findByIdAndDelete(req.params.id).then(() => {
        console.log('upcoming deleted');
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;