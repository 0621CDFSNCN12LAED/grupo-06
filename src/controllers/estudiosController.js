const path = require("path");
const fs = require('fs');

//Importo el JSON de estudios
const estudiosFilePath = path.join(__dirname, '../data/estudiosDataBase.json');
const estudios = JSON.parse(fs.readFileSync(estudiosFilePath, 'utf-8'));

//Creacion del controlador
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

    guardarEstudio: (req, res) => {

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