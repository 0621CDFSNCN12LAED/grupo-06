const db = require('../../database/models');

module.exports = {
    list: async(estado) => {
        const categoriasAll = await db.Categorias.findAll({
            where: {
                estado: true,
            },
        });

        return categoriasAll;
    },
};