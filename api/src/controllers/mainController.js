const path = require("path");
const estudioService = require("../services/estudio-service");

const controller = {
    home: async(req, res) => {
        const estudios = await estudioService.list_ultimos_4_estudios();
        console.log(estudios);
        res.render("index",  { estudios: estudios });
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
};

module.exports = controller;