const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/contacto", mainController.contacto);
router.get("/nosotros", mainController.nosotros);
router.get("/sedes", mainController.sedes);
router.get("/ingresar", mainController.ingresar);
router.get("/registro", mainController.registro);
router.get("/perfil-usuario", mainController.perfilUsuario);
router.get("/producto-detalle/:id", mainController.productoDetalle);
router.get("/carrito", mainController.carrito);
router.get("/listado-estudios", mainController.listadoProductos);
router.get("/crear-producto", mainController.crearProducto);
router.get("/modificar-producto", mainController.modificarProducto);

module.exports = router;
