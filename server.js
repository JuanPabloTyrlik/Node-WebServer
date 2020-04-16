const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Pablo',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});