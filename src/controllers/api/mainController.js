const express = require("express");
const router = express.Router();

const estudiosController = require("./api-estudios-controller");

router.use("/estudios", estudiosController.listadoEstudios);
router.use("/estudio/:id", estudiosController.estudioDetalle);

module.exports = router;