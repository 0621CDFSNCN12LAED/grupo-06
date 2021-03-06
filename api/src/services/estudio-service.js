const path = require("path");
const fs = require("fs");
const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    create: async(payload, image) => {

        await db.Estudios.create({
            titulo: payload.title,
            descripcion: payload.desc,
            antes: payload.antes,
            precio: payload.price,
            img: image ? image.filename : "no-image.png",
            id_categoria: 5,
            estado: true,
        });
    },

    edit: async(id_estudio, payload, image) => {
        //Busco el estudio a modificar
       
        await db.Estudios.update({
            titulo: payload.titulo,
            descripcion: payload.descripcion,
            antes: payload.antes,
            precio: payload.precio,
            id_categoria: 5,
            img: image ? image.filename : "no-image.png",     
            estado: true
        }, {
            where: { id: id_estudio}
        });
        
    },

    list: async() => {
        const estudiosAll = await db.Estudios.findAll({
            include: [
                {association: "categoria"},
                {association: "ubicaciones"}
            ],
            where: {
                estado: true,
            },
            order: [
                ['id', 'DESC']
            ],
            //limit: 10,            
        });

        return estudiosAll;
    },

    list_todos: async() => {
        //Incluye estudios inactivos
        const estudiosAll = await db.Estudios.findAll({
            include: [
                {association: "categoria"},
                {association: "ubicaciones"}
            ],            
            order: [
                ['id', 'DESC']
            ],
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

    ultimo_estudio: async() => {
        const ultimo_estudio_creado = await db.Estudios.findAll({
            where: {estado: true},
            order: [
                ['fecha_creacion', 'DESC']
            ],
            limit: 1,
        });
        return ultimo_estudio_creado;
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
                    [Op.like]: '%'+ palabra.toLowerCase() +'%'
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
        const estudio = await db.Estudios.findByPk(id,
            {
                include: [
                    {association: "categoria"},
                    {association: "ubicaciones"}
                ],
            });
        
        return estudio;
    },

};