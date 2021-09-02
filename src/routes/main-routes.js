const express = require("express");
const router = express.Router();

//Importo los modulos necesarios
const mainController = require("../controllers/mainController");
const estudiosRoutes = require('./estudios-routes');
const usersRoutes = require('./users-routes');
const carritoRoutes = require('./carrito-routes');

//Ruteador para main
router.get("/", mainController.home);
router.get("/contacto", mainController.contacto);
router.get("/nosotros", mainController.nosotros);
router.get("/sedes", mainController.sedes);

//Ruteador para estudios
router.use('/estudios', estudiosRoutes);

//Ruteador para usuarios
router.use('/users', usersRoutes);

//Ruteador para carrito
router.use('/carrito', carritoRoutes);

module.exports = router;