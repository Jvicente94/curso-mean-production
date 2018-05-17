'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//cargar rutas
var user_routes = require('./routes/userRoutes')
var animals_routes = require('./routes/animalsRoutes');


//middlewares de body-parser (funcion que se ejecuta antes de todo ante una peticion http)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Cosiguracion de cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
    next();
});

//rutas base
// app.use(express.static(path.join(__dirname,'client')));
app.use('/',express.static('client',{redirect : false }));
app.use('/api', user_routes);
app.use('/api', animals_routes);

app.get('*', function(req, res , next){
    res.sendFile(path.resolve('client/index.html'));
});

module.exports = app;