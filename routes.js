const express = require('express');
const router = express.Router();

const Movie = require('./Movie');

router.post('/movie', async (request, response) => {
    const movie = new Movie({
        title: "Godzila",
        description: "a film about a big monster",
        date: new Date("2015-03-25"),
        reviews: [{
            author: "Sam Cave",
            rating: "5*"
        }, {
            author: "Tim Smith",
            rating: "4*"
        }],
        actors: [{
            name: "Aaron Taylor- Johnson",
            role: "Ford Brody"
        }, {
            name: "Elizabeth Olsen",
            role: "Elle Brody"
        }]
    });
    await movie.save();
    response.send(movie);
});

router.get('/movie', async (request, response) => {
    const movie = await Movie.find();
    response.send(movie);
});

router.get('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

router.patch('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        movie.title = 'New God zilla';
        movie.actors.push({
            name: "Brain",
            role: "Joe Brody"
        });
        await movie.save();
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

router.delete('/movie/:id', async (request, response) => {
    try {
        const movie = await Movie.findById(request.params.id);
        await movie.deleteOne();
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'movie does not exist' })
    }
});

module.exports = router;