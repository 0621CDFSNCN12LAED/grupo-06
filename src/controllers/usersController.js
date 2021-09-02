const path = require("path");

const controller = {
    ingresar: (req, res) => {
        res.render("./users/ingresar");
    },
    registro: (req, res) => {
        res.render("./users/registro");
    },
    perfilUsuario: (req, res) => {
        res.render("./users/perfil");
    },

};

//Exportamos módulo.
module.exports = controller;