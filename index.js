'use strict' //PAra indicar que se puede utilizar los ultimos intrucciones de javascript

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.connect('mongodb://localhost:27017/zooilogico', (err, res) => {

    if (err) {
        throw err;
    } else {
        console.log('La conexión a la BBDD se ha realizado correctamente');

        //Listen nos permite crear un servidor web que escuche peticiones
        app.listen(port, () => {
            console.log("El servidor local con Node y Express está corriendo correctamente");
        });
    }

});