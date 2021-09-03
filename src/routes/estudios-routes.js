const express = require("express");
const router = express.Router();

const estudiosController = require('../controllers/estudiosController');

//Rutas de estudios
router.get("/", estudiosController.listadoEstudios);
router.get("/listado-estudios", estudiosController.listadoEstudios); //Este link se accede desde '/', ver si dejamos solo /estudios o tambien /estudios/listado-estudios
router.get("/estudio-detalle/:id", estudiosController.estudioDetalle);
router.get("/crear-estudio", estudiosController.crearEstudio);
router.get("/modificar-estudio", estudiosController.modificarEstudio);


module.exports = router;