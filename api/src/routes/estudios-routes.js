const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const estudiosController = require("../controllers/estudiosController");
const validacionesEstudioCreacion = require('../validations/estudios-creacion-validacion');
const validacionesEstudioModificacion = require('../validations/estudios-modificacion-validacion');
const LoggedMiddleware = require("../middlewares/autorLoggedMiddleware");

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

//Ejecución de Multer–
const upload = multer({ storage: storage });

//Rutas de estudios
router.get("/", estudiosController.listadoEstudios);
/* router.get("/", estudiosController.listadoEstudiosFooter); */
router.get("/estudio-detalle/:id", estudiosController.estudioDetalle);

router.get("/crear-estudio", estudiosController.crearEstudio);
router.post(
    "/crear-estudio",
    upload.single("imagenEstudio"),
    validacionesEstudioCreacion, //Se validan todos los campos obligatorios y su formato en la creación del estudio
    estudiosController.guardarEstudio
);

//Editar Estudio
router.get("/modificar/:id", estudiosController.modificarEstudio);
router.put(
    "/actualizar/:id",
    upload.single("imagenEstudio"),
    validacionesEstudioModificacion, //Se validan todos los campos obligatorios y su formato en la modificación del estudio
    estudiosController.actualizarEstudio
);

router.get ("/buscar-estudio", estudiosController.search);

module.exports = router;

//eliminar un estudio
router.get("/eliminar/:id", estudiosController.delete);

//boton comprar

router.get ("/carrito", LoggedMiddleware, estudiosController.comprar);