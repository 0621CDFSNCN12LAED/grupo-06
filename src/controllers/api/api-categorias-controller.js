const categoriaService = require("../../services/categoria-service");

//Creacion del controlador
const controller = {
    listadoCategorias: async(req, res) => {
        const categorias = await categoriaService.list();

        res.json(categorias);
    },
   
};

//Exportamos módulo.
module.exports = controller;



