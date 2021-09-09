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
        //Obtengo el maximo id de estudios
        let estudioMaximoId = Math.max.apply(Math, estudios.map(function(o) {
            return o.id;
        }));

        //creo el objeto estudio a agregar
        const estudio_nuevo = {
            "id": estudioMaximoId + 1,
            "title": req.body.title,
            "desc": req.body.desc,
            "antes": req.body.antes,
            "option": req.body.option,
            "price": number(req.body.price),
            "img": req.file.filename
        };

        //Agrego el nuevo estudio al array en memoria de estudios
        estudios.push(estudio_nuevo);

        //transformo el array de estudios a JSON
        estudiosJSON = JSON.stringify(estudios, null, 4);

        //Storeo en estudiosDataBaseJson el array de estudios en String con formato JSON
        fs.writeFileSync(estudiosFilePath, estudiosJSON);

        //Redirecciono a listado de estudios
        res.redirect('/estudios');

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