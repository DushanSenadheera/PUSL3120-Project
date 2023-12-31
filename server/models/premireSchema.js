const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const premireSchema = new Schema({
    movie: {
        type: String,
        required: true,
    },
    directorName: {
        type: String,
        require: true,
    },
    catergory: {
        type: String,
        required: true,
    },
    cast:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    poster:{
        type: String,
        required: true,
    },
    background:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Premire = mongoose.model('Premire', premireSchema);

module.exports = Premire;