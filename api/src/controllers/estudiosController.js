const { send } = require("process");
const {validationResult} = require('express-validator');
const estudioService = require("../services/estudio-service");
const res = require("express/lib/response");

/*
//Importo el JSON de estudios
const estudiosFilePath = path.join(__dirname, "../data/estudiosDataBase.json");
const estudios_todos = JSON.parse(fs.readFileSync(estudiosFilePath, "utf-8"));

//Solo cargo los estudios activos, los que tienen borrado logíco (active = false), no los cargo en el array
let estudios = estudios_todos.filter(function(elemento) {
    return elemento.active == true;
});
*/

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

    estudioDetalle: async(req, res) => {        
        const detEst = await estudioService.searchOneEstudio(req.params.id);
        console.log(detEst);
        //res.send(detEst);
        res.render("./products/estudioDetalle", { detEst: detEst });
    },

    crearEstudio: (req, res) => {
        res.render("./products/crearEstudio");
    },

    guardarEstudio: (req, res) => {
        console.log(req.body);
        let errors = validationResult(req);
        console.log('ERRORES');
        console.log(errors);
        if(errors.isEmpty()){
            estudioService.create(req.body, req.file);
            res.redirect("/estudios");
        }
        else{
            return res.render('./products/crearEstudio', {errors: errors.mapped(), old: req.body});
        }
    },        

    modificarEstudio: async(req, res) => {
        const estudio = await estudioService.searchOneEstudio(req.params.id);

        res.render("products/modificarEstudio", { estudio });
    },

    actualizarEstudio: async(req, res) => {
        let errors = validationResult(req);
        const estudio  = await estudioService.searchOneEstudio(req.params.id);
        if(errors.isEmpty())
        {
            
            await estudioService.edit(estudio.id, estudio, req.file);
            const estudios = await estudioService.list();

            res.render("./products/listadoEstudios", { estudios: estudios });
        }else{
            return res.render("./products/modificarEstudio", { estudio: estudio,  errors: errors.mapped(), old: req.body});
        }

    },
    delete: async(req, res) => {
        await estudioService.delete(req.params.id);

        //Redirecciono a listado de estudios
        res.redirect("/estudios");

    },
    search: async(palabra) => {
        await estudioService.search(palabra);

    },

    comprar: async (req, res) => {
        res.render("./products/carrito");

    }

}

//Exportamos módulo.
module.exports = controller;



