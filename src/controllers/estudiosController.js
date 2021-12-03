const path = require("path");
const fs = require("fs");
const { send } = require("process");
const {validationResult} = require('express-validator');
const estudioService = require("../services/estudio-service");


//Importo el JSON de estudios
const estudiosFilePath = path.join(__dirname, "../data/estudiosDataBase.json");
const estudios_todos = JSON.parse(fs.readFileSync(estudiosFilePath, "utf-8"));

//Solo cargo los estudios activos, los que tienen borrado logíco (active = false), no los cargo en el array
let estudios = estudios_todos.filter(function(elemento) {
    return elemento.active == true;
});

//Creacion del controlador
const controller = {
    listadoEstudios: async(req, res) => {
        const estudios = await estudioService.list();
        //res.send(estudios);
        res.render("./products/listadoEstudios", { estudios: estudios });
    },

    listadoUltimos4Estudios: async(req, res) => {
        const estudios = await estudioService.list_ultimos_4_estudios();
        
        return estudios;
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

    guardarEstudio: async(req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            await estudioService.create(req.body, req.file);
            res.redirect("/estudios");
        }else{
            console.log("hay errores");
            return res.render('./products/crearEstudio', {errors: errors.mapped(), old: req.body});
        }
    },        

    modificarEstudio: async(req, res) => {
        const estudio = await estudioService.searchOneEstudio(req.params.id);
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
    delete: async(req, res) => {
        await estudioService.delete(req.params.id);

        //Redirecciono a listado de estudios
        res.redirect("/estudios");

    },
    search: async(palabra) => {
        await estudioService.search(palabra);
    },
};

//Exportamos módulo.
module.exports = controller;



