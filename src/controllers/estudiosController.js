const path = require("path");

const estudios = [
  {
    id: 1,
    title: "Estudio 1",
    desc: "Es un estudio para averiguar la cant de blah blah en sangre",
    antes: "Debe hacer ayuno de 12 hs",
    option: "Extracción en domicilio",
    price: "$1.500",
    img: "/img/Estudio-1.jpg",
  },
  {
    id: 2,
    title: "Estudio de Paternidad",
    desc: "Este estudio compara los blah blah de las dos muestras para determinar si hay parentezco",
    antes: "Debe hacer ayuno de 12hs",
    option: "Extracción en domicilio",
    price: "$3.200",
    img: "/img/Estudio-Paternidad.jpg",
  },
  {
    id: 3,
    title: "Preocupacional",
    desc: "Estudio requerido por el empleador que incluye: análisis de sangre básico, análisis de orina, ...",
    antes: "Debe hacer ayudn de 8hs",
    option: "Extracción en Sede",
    price: "$1.800 c/u, $1.000 a partir de 5",
    img: "/img/examen-preocupacional.jpg",
  },
  {
    id: 4,
    title: "Test de Embarazo",
    desc: "Es un estudio que mide la hormona beta hCG",
    antes: "No se necesita ayuno",
    option: "Extracción en domicilio",
    price: "$750",
    img: "/img/test-embarazo.jpg",
  },
  {
    id: 5,
    title: "Estudio 5",
    desc: "Sirve para determianr si tiene blah blah...",
    antes: "Debe hacer ayuno de 16 hs",
    option: "Extracción en Sede",
    price: "$800",
    img: "/img/Estudio-1.jpg",
  },
];

const controller = {
  estudioDetalle: (req, res) => {
    //res.render("./products/productoDetalle");
    const detEst = estudios.find((detEst) => {
      return detEst.id == req.params.id;
    });
    res.render("./products/estudioDetalle", { detEst: detEst });
  },
  crearEstudio: (req, res) => {
    res.render("./products/crearEstudio");
  },
  modificarEstudio: (req, res) => {
    res.render("./products/modificarEstudio");
  },
  listadoEstudios: (req, res) => {
    res.render("./products/listadoEstudios", { estudios: estudios });
  },
};

//Exportamos módulo.
module.exports = controller;
