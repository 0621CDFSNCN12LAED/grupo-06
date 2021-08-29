const express = require('express');

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/producto-detalle', mainController.productoDetalle);
router.get('/carrito', mainController.carrito);
router.get('/estudios', mainController.listadoProductos);
router.get('/crear-producto', mainController.crearProducto);
router.get('/modificar-producto', mainController.modificarProducto);
router.get('/registro', mainController.register);
router.get('/perfil-usuario', mainController.perfilUsuario);

module.exports = router;