const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use('/api', routes);

        app.listen(3000, () =>
            console.log('server running...')
        );
    });