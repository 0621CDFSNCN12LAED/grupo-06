const express = require("express");
const router = express.Router();
const carritoController = require('../controllers/carritoController');

//Rutas de carrito
router.get("/", carritoController.carrito);


//Exportamos módulo.
module.exports = router;