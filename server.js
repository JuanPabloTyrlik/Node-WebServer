const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});