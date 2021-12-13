const db = require('../../database/models');

module.exports = {
    list: async() => {
        const categoriasAll = await db.Categorias.findAll({
            where: {
                estado: true,
            },
        });

        return categoriasAll;
    },
};