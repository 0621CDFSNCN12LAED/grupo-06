const express = require("express");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const validacionesRegistroPaciente = require('../validations/paciente-registro-validations');
const validacionesPacienteLogin = require('../validations/paciente-login-validacion');

//Creacion de storage que ataja el endpoint archivos del formulario registro
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img/imagenes_perfil"));
    },
    filename: (req, file, cb) => {
        const nombrePerfilImagen =
            Date.now() + "_perfil" + path.extname(file.originalname);
        cb(null, nombrePerfilImagen);
    },
});


//Ejecución de Multer
const upload = multer({ storage: storage });

//Rutas de usuarios
router.get("/perfil-usuario", usersController.perfilUsuario);
router.get("/ingresar", usersController.showLogin);
router.post("/login", 
    //validacionesPacienteLogin,
    usersController.login);

router.get("/registro", usersController.registro);

router.post("/registro", 
    upload.single("imagenPerfil"),
    //validacionesRegistroPaciente, //Validaciones en los campos de registro de Usuario
    usersController.crearPaciente);


//Exportamos módulo.
module.exports = router;