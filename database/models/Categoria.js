module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria_nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        estado: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        fecha_creacion: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        fecha_modificacion: {
            type: dataTypes.DATE,
            allowNull: false
        }
    };

    let config = {
        tableName: "Categorias",
        timestamp: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
    };

    let Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Estudios, {
            as: "estudios",
            foreignKey: "id_categoria"
        });
    };
    /**/
    /**/

    return Categoria;

};