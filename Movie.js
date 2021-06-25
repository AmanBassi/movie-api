const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: String,
    date: Date,
    reviews: [{
        author: String,
        rating: String
    }],
    actors: [{
        name: String,
        role: String
    }]
});

module.exports = mongoose.model("Movies", movieSchema);