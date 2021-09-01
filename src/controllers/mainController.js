const path = require("path");

const estudios = [
  {
    id: 1,
    title: "Estudio 1",
    desc: "Es un estudio para averiguar la cant de blah blah en sangre",
    option: "Extracción en domicilio",
    price: "$1.500",
    imag: "..../img/Estudio-1",
  },
  {
    id: 2,
    title: "Estudio de Paternidad",
    desc: "Este estudio compara los blah blah de las dos muestras para determinar si hay parentezco",
    option: "Extracción en domicilio",
    price: "$3.200",
    imag: "..../img/Estudio-Paternidad",
  },
  {
    id: 3,
    title: "Preocupacional",
    desc: "Estudio requerido por el empleador que incluye: análisis de sangre básico, análisis de orina, ...",
    option: "Extracción en Sede",
    price: "$1.800 c/u, $1.000 a partir de 5",
    imag: "..../img/examen-preocupacional",
  },
  {
    id: 4,
    title: "Test de Embarazo",
    desc: "Es un estudio que mide la hormona beta hCG",
    option: "Extracción en domicilio",
    price: "$750",
    imag: "..../img/test-embarazo",
  },
  {
    id: 5,
    title: "Estudio 5",
    desc: "Sirve para determianr si tiene blah blah...",
    option: "Extracción en Sede",
    price: "$800",
    imag: "..../img/Estudio-1",
  },
];

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
    //res.render("./products/productoDetalle");
    const detEst = estudios.find((detEst) => {
      return detEst.id == req.params.id;
    });
    res.render("./products/productoDetalle", { detEst: detEst });
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
    //res.render("./products/listadoProductos");

    res.render("./products/listadoProductos", { estudios: estudios });
  },
};

module.exports = controller;
