const {validationResult} = require('express-validator');
const estudioService = require("../../services/estudio-service");
const categoriaService = require("../../services/categoria-service");

//Creacion del controlador
const controller = {
    listadoEstudios: async(req, res) => {
        const estudios = await estudioService.list();
        const categorias = await categoriaService.list();
        let total_estudios = 0;

        //Creo el array útil de contador de estudios por categoría
        const countByCategory = [];

        //Recorro las categorías
        categorias.map((categoria, i) => {
            let contador = 0;
            
            for(const estudio of estudios){
                
                if(categoria.id == estudio.id_categoria ){
                    contador += 1;
                }
            }

            countByCategory[i] = {categoria: categoria.categoria_nombre, total: contador};
        });

        //Creo el array de objetos de estudios agregandole la url de detalle         
        estudios.map((estudio) => {
            total_estudios += 1;
            estudio.dataValues.url = 'api/estudio/' + estudio.id;
            estudio.dataValues.categoria = estudio.categoria.categoria_nombre;
        });
 
        if(estudios){
            
            res.json({
                meta: {
                    status: 200,
                    url: 'api/estudios',
                    descripcion: 'listado de todos los estudios disponibles y activos'
                },
                data: {
                    estudios: estudios,
                    count: total_estudios,
                    countByCategory: countByCategory,
                },
            });

        } else {
            res.json({
                meta: {
                    status: 503,                    
                    url: 'api/estudios',
                    descripcion: 'error'
                },
                data: 'no data'
            });
    }},

    estudioDetalle: async(req, res) => {

        const detEst = await estudioService.searchOneEstudio(req.params.id);
        
        if(detEst){
            detEst.dataValues.url = 'api/estudio/' + req.params.id;
            detEst.dataValues.categoria = detEst.categoria.categoria_nombre;
            detEst.dataValues.ubicaciones = detEst.ubicaciones;
            res.json(detEst);
        }

        
    },
    
    
    listadoUltimos4Estudios: async(req, res) => {
        const estudios = await estudioService.list_ultimos_4_estudios();
        
        if(estudios){
            
            res.json({
                meta: {
                    status: 200,
                    url: 'api/estudios/ultimos_cuatro_estudios',
                    descripcion: 'Despliega los últimos 4 estudios creados y activos'
                },
                data: {
                    estudios: estudios,
                    count: estudios.lenght,
                },
            });

        } else {
            res.json({
                meta: {
                    status: 503,                    
                    url: 'api/estudios/ultimos_cuatro_estudios',
                    descripcion: 'error - api/estudios/ultimos_cuatro_estudios'
                },
                data: 'no data'
            });
        }
    },

    ultimoEstudioCreado: async(req, res) =>{
        const estudio = await estudioService.ultimo_estudio();
        
        if(estudio){
            
            res.json({
                meta: {
                    status: 200,
                    url: 'api/estudios/ultimo_estudio_creado',
                    descripcion: 'Despliega el último estudio creado y activo'
                },
                data: {
                    estudio: estudio,
                    count: 1,
                },
            });

        } else {
            res.json({
                meta: {
                    status: 503,                    
                    url: 'api/estudios/ultimo_estudio_creado',
                    descripcion: 'error'
                },
                data: 'no data'
            });
        }
    },
   
/*
    crearEstudio: (req, res) => {
        res.render("./products/crearEstudio");
    },

    guardarEstudio: async(req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            await estudioService.create(req.body, req.file);
            res.redirect("/estudios");
        }else{
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
    */
};

//Exportamos módulo.
module.exports = controller;



