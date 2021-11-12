module.exports = (sequelize, dataTypes) => {
    let alias = "Estudios";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING(150),
            allowNull: false,

        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false,

        },
        antes: {
            type: dataTypes.STRING(255),
            allowNull: false,

        },
        precio: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        img: {
            type: dataTypes.STRING(255),
            allowNull: true,
        },
        fecha_creacion: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        fecha_modificacion: {
            type: dataTypes.DATE,
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
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
    };

    let Estudio = sequelize.define(alias, cols, config);

    return Estudio;
};