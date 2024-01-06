const express = require('express');
const router = express.Router();
const Premire = require('../models/premireSchema');
const multer = require('multer');

router.get('/premire', (req, res) => {
    Premire.find({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
const upload = multer({ storage: storage });
const cpUpload = upload.fields([{ name: 'poster', maxCount: 1 }, { name: 'background', maxCount: 1 }])

router.post('/premire/add', cpUpload, (req, res) => {

    const poster = req.files['poster'][0];
    const pos = poster.originalname;
    
    const background = req.files['background'][0];
    const back = background.originalname;
    
    const premire = new Premire({
        movie: req.body.movie,
        directorName: req.body.directorName,
        catergory: req.body.catergory,
        cast: req.body.cast,
        description: req.body.description,
        poster: pos,
        background: back,
        link: req.body.link,
        price: req.body.price,
    });

    premire.save().then(() => {
        console.log('premire added');
        res.send('premire added');
    }).catch((err) => {
        console.log(err);
        res.send(err);
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