const express = require("express");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const validacionesRegistroPaciente = require('../validations/paciente-registro-validacion');
const validacionesPacienteLogin = require('../validations/paciente-login-validacion');
/* const loggedUserMibbleware = require ('../middlewares/autorGuestMiddleware'); */

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
router.get("/perfil", usersController.perfilUsuario);
router.get("/ingresar", usersController.showLogin);
router.post("/login", 
    validacionesPacienteLogin,
    usersController.login);

router.get("/registro", usersController.registro);

router.post("/registro", 
    upload.single("imagenPerfil"),
    validacionesRegistroPaciente, //Validaciones en los campos de registro de Usuario
    usersController.crearPaciente);


//Middlewares

/* const validationsErrorsMiddleware = require("../middlewares/validations-errors-middleware"); */
/* const autorGuestMiddleware = require("../middlewares/autorGuestMiddleware");
const autorLoggedMiddleware = require("../middlewares/autorLoggedMiddleware"); */

//Exportamos módulo.
module.exports = router;