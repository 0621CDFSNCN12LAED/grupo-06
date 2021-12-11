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
        id_categoria: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        }

    };

    let config = {
        tableName: "Estudios",
        timestamp: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
    };

    let Estudio = sequelize.define(alias, cols, config);

    //Establezo relación con Categoría: un Estudio tiene una Categoría asignada
    Estudio.associate = function(models){
        Estudio.belongsTo(models.Categorias, {
            as: "categoria",
            foreignKey: "id_categoria"
        })
        Estudio.belongsToMany(models.Ubicaciones, {
            as: "ubicaciones",
            through: "estudio_ubicacion",
            foreignKey: "id_estudio",
            otherKey: "id_ubicacion",
            timestamp: false,
        });

    };

    return Estudio;
};