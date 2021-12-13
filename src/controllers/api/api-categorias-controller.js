const categoriaService = require("../../services/categoria-service");

//Creacion del controlador
const controller = {
    listadoCategorias: async(req, res) => {
        const categorias = await categoriaService.list();
        let total_categorias = 0;

        //Creo el array de objetos de estudios agregandole la url de detalle         
        categorias.map((categoria) => {
            total_categorias += 1;
            delete categoria.dataValues.id;
            delete categoria.dataValues.estado;
            delete categoria.dataValues.fecha_creacion;
            delete categoria.dataValues.fecha_modificacion;
        });
 
        if(categorias){
            
            res.json({
                meta: {
                    status: 200,
                    url: 'api/categorias',
                    descripcion: 'listado de todos las categorias disponibles y activas'
                },
                data: {
                    categorias: categorias,
                    count: total_categorias,
                },
            });

        } else {
            res.json({
                meta: {
                    status: 503,                    
                    url: 'api/categorias',
                    descripcion: 'error'
                },
                data: 'no data'
        });
    }},
   
};

//Exportamos módulo.
module.exports = controller;



