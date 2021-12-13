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
};

module.exports = controller;