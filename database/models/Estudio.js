module.exports = (sequelize, dataTypes) => {
    let alias = "Estudios";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
        descripcion: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
        antes: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
        estudio_ubicacion_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha_creacion: {
            type: dataTypes.Date,
            allowNull: false,
        },
        fecha_modificacion: {
            type: dataTypes.INTEGER,
            allowNull: false,

        },
        estado: {
            type: dataTypes.BOOLEAN,
            allowNull: false,

        },



    };

    let config = {
        tableName: "Estudios",
        timestamp: true,
    };

    let Estudio = sequelize.define(alias, cols, config);

    return Estudio;
};