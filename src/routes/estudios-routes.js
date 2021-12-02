const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const estudiosController = require("../controllers/estudiosController");
const {body} = require('express-validator');

//Creacion de storage que ataja el endpoint archivos del formulario creacion estudio
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img/estudios_imagenes"));
    },
    filename: (req, file, cb) => {
        const nombreEstudioImagen =
            Date.now() + "_estudio" + path.extname(file.originalname);
        cb(null, nombreEstudioImagen);
    },
});

//Validaciones de la creación de estudios
const validacionesEstudio = [
    body("title")
        .notEmpty().withMessage('Se debe ingresar el nombre del estudio'),
    body('desc')
        .notEmpty().withMessage('Se debe ingresar descripción del estudio'),
    body('antes')
        .notEmpty().withMessage('Se debe ingresar los pre requisitos del estudio'),
    body('option')
        .notEmpty().withMessage('Se debe ingresar las opciones posibles para realizar del estudio'),
    body('price')
        .notEmpty().withMessage('Se debe ingresar el precio del estudio').bail()
        .isNumeric().withMessage('Se debe ingresar un valor numérico'),   
];

//Ejecución de Multer
const upload = multer({ storage: storage });

//Rutas de estudios
router.get("/", estudiosController.listadoEstudios);
router.get("/listado-estudios", estudiosController.listadoEstudios); //Este link se accede desde '/', ver si dejamos solo /estudios o tambien /estudios/listado-estudios
router.get("/estudio-detalle/:id", estudiosController.estudioDetalle);

router.get("/crear-estudio", estudiosController.crearEstudio);
router.post(
    "/crear-estudio",
    upload.single("imagenEstudio"),
    validacionesEstudio,
    estudiosController.guardarEstudio
);

//Editar Estudio
router.get("/modificar/:id", estudiosController.modificarEstudio);
router.put(
    "/actualizar/:id",
    validacionesEstudio,
    upload.single("imagenEstudio"),
    estudiosController.actualizarEstudio
);

module.exports = router;

//eliminar un estudio
router.get("/eliminar/:id", estudiosController.delete);