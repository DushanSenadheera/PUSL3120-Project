const express = require('express');
const router = express.Router();
const Premire = require('../models/premireSchema');

router.get('/premire', (req, res) => {
    Premire.find({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/premire/add', (req, res) => {
    const premire = new Premire({
        movie: req.body.movie,
        directorName: req.body.directorName,
        catergory: req.body.catergory,
        cast: req.body.cast,
        description: req.body.description,
        poster: req.body.poster,
        background: req.body.background,
        link: req.body.link,
        price: req.body.price,
    });

    premire.save().then(() => {
        console.log('premire added');
    }).catch((err) => {
        console.log(err);
    });
} );

router.put('/premire/update/:id', (req, res) => {
    Premire.findByIdAndUpdate(req.params.id, {
        movie: req.body.movie,
        directorName: req.body.directorName,
        catergory: req.body.catergory,
        cast: req.body.cast,
        description: req.body.description,
        poster: req.body.poster,
        background: req.body.background,
        link: req.body.link,
        price: req.body.price,
    }).then(() => {
        console.log('premire updated');
    }).catch((err) => {
        console.log(err);
    });
});

router.delete('/premire/delete/:id', (req, res) => {
    Premire.findByIdAndDelete(req.params.id).then(() => {
        console.log('premire deleted');
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;