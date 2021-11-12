const path = require("path");
const fs = require("fs");
const db = require('../../database/models');
const { triggerAsyncId } = require("async_hooks");
const Op = db.Sequelize.Op;

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

    edit: async(payload, image) => {
        const estudio = await db.Estudios.findByPk(id_estudio);
        estudio.update({
            titulo: payload.title,
            descripcion: payload.desc,
            antes: payload.antes,
            precio: payload.price,
            img: image ? image.filename : "no-image.png",
            estado: true,
        }, {
            where: { id: payload.id }
        });
    },

    list: async() => {
        const estudiosAll = await db.Estudios.findAll({
            where: {
                estado: true,
            },
            order: [
                ['id', 'DESC']
            ],
            limit: 10,
        });

        return estudiosAll;
    },

    list_ultimos_4_estudios: async() => {
        const estudios_ultimos_4 = await db.Estudios.findAll({
            where: {
                estado: true,
            },
            order: [
                ['fecha_creacion', 'DESC']
            ],
            limit: 4,
        });

        return estudios_ultimos_4;
    },

    delete: async(id_estudio) => {
        const estudio = await db.Estudios.findByPk(id_estudio);
        estudio.update({
            estado: false,
        }, {
            where: { id: id_estudio }
        });
    },

    search: async(palabra) => {
        const estudiosSearch = await db.Estudios.findAll({
            where: {
                titulo: {
                    [Op.like]: '%${palabra}%'
                },
            },
            estado: true,
            order: [
                ['id', 'DESC']
            ],
            limit: 10,
        });

        return estudiosSearch;
    },

    searchOneEstudio: async(id) => {
        const estudio = await db.Estudios.findByPk(id);
        return estudio;
    },
};