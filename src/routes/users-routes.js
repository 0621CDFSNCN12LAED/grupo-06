const express = require("express");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const {check} = require('express-validator');

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

//Validaciones del registro de usuario
const validacionesRegistro = [
    check('firstname')
        .notEmpty().withMessage('Se debe completar el Nombre').bail()
        .isAlpha().withMessage('Se deben ingresar caracteres alfabéticos'),
    check('lastname')
        .notEmpty().withMessage('Se debe completar el Apellido').bail()
        .isAlpha().withMessage('Se deben ingresar caracteres alfabéticos'),
    check('doc_type')
        .notEmpty().withMessage('Se debe completar el Tipo de Documento'),
    check('nroDocumento')
        .notEmpty().withMessage('Se debe completar el Número de Documento').bail()
        .isInt().withMessage('Se deben ingresar caracteres numéricos'),
    check('birth_date')
        .notEmpty().withMessage('Se debe completar la fecha de cumpleaños').bail()
        .isDate().withMessage('Debe ser una fecha válida'),
    check('gender')
        .notEmpty().withMessage('Se debe elegir un género'),
    check('email')
        .notEmpty().withMessage('Se debe ingresar el mail de contacto').bail()
        .isEmail().withMessage('El mail debe tener un formato válido'),
    check('reEmail')
        .notEmpty().withMessage('Se debe ingresar el mail de contacto').bail()
        .isEmail().withMessage('El mail debe tener un formato válido'),
    check('password')
        .notEmpty().withMessage('Se debe ingresar una password').bail()
        .isLength({min:8}).withMessage('La contraseña debe ser mínimo de 8 caracteres'),
    check('term')
        .notEmpty().withMessage('Se deben aceptar los términos y condiciones'),
];

//Ejecución de Multer
const upload = multer({ storage: storage });

//Rutas de usuarios
router.get("/perfil-usuario", usersController.perfilUsuario);
router.get("/ingresar", usersController.showLogin);
router.post("/login", usersController.login);
router.get("/registro", usersController.registro);
router.post("/registro", 
    upload.single("imagenPerfil"),
    validacionesRegistro, //Validaciones en los campos de registro de Usuario
    usersController.crearPaciente);


//Exportamos módulo.
module.exports = router;