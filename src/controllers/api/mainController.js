const express = require("express");
const router = express.Router();

const estudiosController = require("./api-estudios-controller");
const pacientesController = require("./api-pacientes-controller");

//Rutas correspondientes a Estudios
router.use("/estudios", estudiosController.listadoEstudios);
router.use("/estudio/:id", estudiosController.estudioDetalle);

//Rutas correspondientes a Pacientes
router.use("/pacientes", pacientesController.listadoPacientes);
router.use("/paciente/:id", pacientesController.pacienteDetalle);

module.exports = router;