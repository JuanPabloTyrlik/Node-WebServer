const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// HBS Engine

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// Routes

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'juan pablo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});