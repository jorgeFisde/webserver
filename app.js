const express = require('express');
const app = express();
const hbs = require('hbs');

// Si hay helpers se ejecutan en el inicio solo con require
require('./hbs/helpers');

const PORT = process.env.PORT || '3000'

app.use( express.static( __dirname + '/public' ) )

// TEMPLATES CON HBS
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    

    res.render('home', {
        nombre: 'Jorge Fischer',
        anio: new Date().getFullYear()
    })
    

});

app.get('/about', (req, res) => {

    

    res.render('about', {
        nombre: 'Jorge Fischer',
        anio: new Date().getFullYear()
    })
    

});

app.listen(PORT, () => {
    console.log('Escuchando en port 3000');
})