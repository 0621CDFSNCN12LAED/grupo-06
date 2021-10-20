const path = require("path");
const fs = require("fs");
const { send } = require("process");

//Importo el JSON de estudios
const estudiosFilePath = path.join(__dirname, "../data/estudiosDataBase.json");
const estudios_todos = JSON.parse(fs.readFileSync(estudiosFilePath, "utf-8"));

//Solo cargo los estudios activos, los que tienen borrado logíco (active = false), no los cargo en el array
let estudios = estudios_todos.filter(function(elemento) {
    return elemento.active == true;
});

//Creacion del controlador
const controller = {
    listadoEstudios: (req, res) => {
        res.render("./products/listadoEstudios", { estudios: estudios });
    },

    listadoUltimos4Estudios: (req, res) => {
        const ultimos4Estudios = estudios.sort();
        res.render("./products/listadoEstudios", { estudios: estudios });
    },

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
        let estudioMaximoId = Math.max.apply(
            Math,
            estudios.map(function(o) {
                return o.id;
            })
        );

        //creo el objeto estudio a agregar
        const estudio_nuevo = {
            id: estudioMaximoId + 1,
            title: req.body.title,
            desc: req.body.desc,
            antes: req.body.antes,
            option: req.body.option,
            price: req.body.price,
            img: req.file ? req.file.filename : "no-image.png",
            active: true,
        };

        //Agrego el nuevo estudio al array en memoria de estudios
        estudios.push(estudio_nuevo);

        //transformo el array de estudios a JSON
        estudiosJSON = JSON.stringify(estudios, null, 4);

        //Storeo en estudiosDataBaseJson el array de estudios en String con formato JSON
        fs.writeFileSync(estudiosFilePath, estudiosJSON);

        //Redirecciono a listado de estudios
        res.redirect("/estudios");
    },

    modificarEstudio: (req, res) => {
        const estudio = estudios.find((estu) => {
            if (estu.id == req.params.id) {
                return estu;
            }
        });

        res.render("products/modificarEstudio", { estudio });
    },

    actualizarEstudio: (req, res) => {
        //busco el estudio para obtener su nombre de imagen guardada
        const estudioImagen = estudios.find((estu) => {
            if (estu.id == req.params.id) {
                return estu.img;
            }
            return null;
        });

        const estudio_actualizado = {
            id: req.params.id,
            title: req.body.title,
            desc: req.body.desc,
            antes: req.body.antes,
            option: req.body.option,
            price: req.body.price,
            img: req.file ? req.file.filename : estudioImagen.img,
        };

        //Quito el objeto del array para luego insertarlo modificado
        estudios = estudios.filter(function(elemento) {
            return elemento.id != req.params.id;
        });

        //Agrego el nuevo estudio al array en memoria de estudios
        estudios.push(estudio_actualizado);

        //Transformo el array de estudios a JSON
        estudiosJSON = JSON.stringify(estudios, null, 4);

        //Storeo en estudiosDataBaseJson el array de estudios en String con formato JSON
        fs.writeFileSync(estudiosFilePath, estudiosJSON);

        //Redirecciono a listado de estudios
        res.redirect("/estudios/estudio-detalle/" + req.params.id);

        //res.render("./products/listadoEstudios", { estudios: estudios });
    },
    delete: (req, res) => {
        let estudioEliminar = estudios.find((estu) => {
            if (estu.id == req.params.id) {
                return estu;
            }
        });
        console.log(estudioEliminar);

        //cambio el estado del estudio a inactivo
        estudioEliminar.active = false;

        console.log(estudioEliminar);

        estudios = estudios.filter(function(elemento) {
            return elemento.id != req.params.id;
        });

        console.log("estudios filtrados");
        console.log(estudios);

        //Agrego el nuevo estudio al array en memoria de estudios
        estudios.push(estudioEliminar);

        //Transformo el array de estudios a JSON
        estudiosJSON = JSON.stringify(estudios, null, 4);

        //Storeo en estudiosDataBaseJson el array de estudios en String con formato JSON
        fs.writeFileSync(estudiosFilePath, estudiosJSON);

        //Redirecciono a listado de estudios
        res.redirect("/estudios");
    },
};

//Exportamos módulo.
module.exports = controller;