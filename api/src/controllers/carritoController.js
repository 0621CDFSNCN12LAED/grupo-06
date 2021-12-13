const path = require("path");

const controller = {
    carrito: (req, res) => {
        res.render("./products/carrito");
    },
};

//Exportamos módulo.
module.exports = controller;