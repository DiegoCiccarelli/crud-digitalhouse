const { json } = require('express');

var express = require('express');
const productosController = require('../controllers/productsController');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET home page. */
//router.get('/', productsController.listado);


router.get('/new', productsController.nuevoVacio);

router.post('/new', productsController.nuevo);

router.get('/edit/:id', productosController.mostrar);

router.post('/edit/:id', productosController.editar);

router.get('/delete/:id', productosController.eliminar);

module.exports = router;
