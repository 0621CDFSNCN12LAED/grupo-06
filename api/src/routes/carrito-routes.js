const express = require("express");
const router = express.Router();
const carritoController = require('../controllers/carritoController');
const LoggedMiddleware = require("../middlewares/autorLoggedMiddleware");



//Rutas de carrito
router.get("/", LoggedMiddleware, carritoController.carrito);


//Exportamos módulo.
module.exports = router;