'use strict'


var express = require('express');
var animalsController = require('../controllers/animalsController');


var api = express.Router();

var md_auth = require('../middlewares/authenticated');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/animals' });

api.get('/pruebasAnimales', md_auth.ensureAuth, animalsController.pruebas);
api.post('/saveAnimal', [md_auth.ensureAuth, md_admin.isAdmin], animalsController.saveAnimal);
api.get('/getAnimals', animalsController.getAnimals);
api.get('/getAnimal/:id', animalsController.getAnimal);
api.put('/updateAnimal/:id', [md_auth.ensureAuth, md_admin.isAdmin], animalsController.updateAnimal);
api.post('/upload-image-animal/:id', [md_auth.ensureAuth, md_admin.isAdmin, md_upload], animalsController.uploadImage);
api.get('/get-image-animal/:imageFile', animalsController.getImageFile);
api.delete('/deleteAnimal/:id', [md_auth.ensureAuth, md_admin.isAdmin], animalsController.deleteAnimal);

module.exports = api;