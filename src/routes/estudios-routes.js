const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const estudiosController = require("../controllers/estudiosController");

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
    estudiosController.guardarEstudio
);

//Editar Estudio
router.get("/modificar/:id", estudiosController.modificarEstudio);
router.put("/actualizar/:id", estudiosController.actualizarEstudio);

module.exports = router;