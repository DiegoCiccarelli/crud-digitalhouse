const { json } = require('express');

var express = require('express');
const productosController = require('../controllers/productsController');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Listado de Productos' });
});


router.get('/new', function(req, res, next){
  res.render('new', {title: 'Nuevo Artículo'});
});

router.post('/new', productsController.nuevo);

router.get('/edit/:id', productosController.mostrar);

router.post('/edit/:id', productosController.editar);

router.get('/delete/:id', productosController.eliminar);

module.exports = router;
