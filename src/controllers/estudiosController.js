const path = require("path");

const estudios = [
  {
    id: 1,
    title: "Test Rapido Anticuerpos SarsCovid",
    desc: "Son pruebas rápidas inmunocromatográfica para la detección cualitativa de anticuerpos IgG/IgM anti SARS-COV-2 (COVID-19) que se utilizan con el objetivo de vigilancia de la enfermedad (investigación epidemiológica) y no de diagnóstico.",
    antes: "",
    option: "Punción en domicilio",
    price: "$3.800",
    img: "/img/Test-covid-anticuerpos.jpg",
  },
  {
    id: 2,
    title: "Test Rapido Anticuerpos SarsCovid",
    desc: "Se trata de un hisopado nasofaríngeo para detectar en forma directa la presencia de material genético del virus en personas infectadas. Es el método con más alta especificidad. El resultado será positivo mientras dure la presencia viral en el organismo.",
    antes: "Se recomienda en casos de pacientes sintomáticos de hasta 7 días de evolución desde la fecha del inicio de los síntomas",
    option: "Hisopado en domicilio",
    price: "$4.500",
    img: "/img/Test-covid-PCR.jpg",
  },
  {
    id: 3,
    title: "Test Serólogico SarsCovid",
    desc: "Este estudio ayuda a determinar si las personas pueden haberse expuesto a este virus y contagiado con él, y si han desarrollado una respuesta inmune específica de anticuerpos IgG contra el coronavirus SARS-CoV-2. Es una prueba automatizada de alta sensibilidad y especificidad para la detección de anticuerpos de tipo inmunoglobulina M (IgM) dirigidos contra el coronavirus SARS-CoV-2 que se encuentran en suero o plasma humano.",
    antes: "",
    option: "Extracción en domicilio",
    price: "$7.600",
    img: "/img/Test-covid-serologico.jpg",
  },  
  {
    id: 4,
    title: "Perfil lipídico",
    desc: "El perfil lipídico mide la concentración de algunas de estas sustancias en la sangre para establecer el riesgo de desarrollar una enfermedad cardiovascular, para el seguimiento del tratamiento de las concentraciones inadecuadas de lípidos.",
    antes: "Debe hacer ayuno de 9-12 horas antes de la obtención de la muestra y solamente se puede beber agua",
    option: "Extracción en domicilio",
    price: "$2.000",
    img: "/img/Perfil-lipidico.jpg",
  },
  {
    id: 5,
    title: "Preocupacional",
    desc: "Estudio requerido por el empleador que incluye: análisis de sangre básico, análisis de orina, ...",
    antes: "Debe hacer ayudn de 8hs",
    option: "Extracción en Sede",
    price: "$1.800 c/u, $1.000 a partir de 5",
    img: "/img/examen-preocupacional.jpg",
  },
  {
    id: 6,
    title: "Test de Embarazo",
    desc: "Una prueba de gonadotropina coriónica humana (GCH) mide el nivel específico de la GCH en la sangre. Esta es una hormona producida en el cuerpo durante el embarazo. Se necesita una muestra de sangre. Esta casi siempre se toma de una vena. El procedimiento se llama venopunción.",
    antes: "No se necesita ayuno",
    option: "Extracción en domicilio",
    price: "$1.850",
    img: "/img/test-embarazo.jpg",
  },
  {
    id: 7,
    title: "Test de Paternidad",
    desc: "Es un método preciso para resolver cuestiones de parentesco por razones médicas, legales o personales. Las pruebas consisten en determinar el perfil genético de los miembros sometidos a estudio, a partir de una muestra de hisopado o de sangre.",
    antes: "",
    option: "Extracción en Sede",
    price: "$1.600",
    img: "/img/Estudio-Paternidad.jpg",
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
