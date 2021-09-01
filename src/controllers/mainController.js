const path = require("path");

const controller = {
  home: (req, res) => {
    res.render("index");
  },
  contacto: (req, res) => {
    res.render("contacto");
  },
  nosotros: (req, res) => {
    res.render("nosotros");
  },
  sedes: (req, res) => {
    res.render("sedes");
  },
  ingresar: (req, res) => {
    res.render("./users/ingresar");
  },
  registro: (req, res) => {
    res.render("./users/registro");
  },
  perfilUsuario: (req, res) => {
    res.render("./users/perfil");
  },
  productoDetalle: (req, res) => {
    res.render("./products/productoDetalle");
  },
  carrito: (req, res) => {
    res.render("./products/carrito");
  },
  crearProducto: (req, res) => {
    res.render("./products/crearProducto");
  },
  modificarProducto: (req, res) => {
    res.render("./products/modificarProducto");
  },
  listadoProductos: (req, res) => {
    res.render("./products/listadoProductos");
  },
};

module.exports = controller;
