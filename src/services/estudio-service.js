const path = require("path");
const fs = require("fs");
const db = require('../../database/models');

module.exports = {
    create: async(payload, image) => {
        console.log(payload);
        await db.Estudios.create({
            titulo: payload.title,
            descripcion: payload.desc,
            antes: payload.antes,
            precio: payload.price,
            img: image ? image.filename : "no-image.png",
            estado: true,
        });
    },

    list: async() => {
        const estudiosAll = await db.Estudios.findAll({
            order: [
                ['id', 'DES']
            ],
            limit: 10,
            offset: 10,
        });

        return estudiosAll;
    },

    list_ultimos_4_estudios: async() => {
        const estudios_ultimos_4 = await db.Estudios.findAll({
            order: [
                ['id', 'DES']
            ],
            limit: 4,
        });

        return estudios_ultimos_4;
    },
};