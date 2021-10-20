const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Rutas de usuarios
router.get("/perfil-usuario", usersController.perfilUsuario);
router.get("/ingresar", usersController.showLogin);
router.post("/login", usersController.login);
router.get("/registro", usersController.registro);
router.post("/registro", usersController.crearUsuario);

//Exportamos módulo.
module.exports = router;