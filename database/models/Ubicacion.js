module.exports = (sequelize, dataTypes) => {
    let alias = "Ubicaciones";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        estado: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
    };

    let config = {
        tableName: "Ubicaciones",
        timestamps: false,
    };

    let Ubicacion = sequelize.define(alias, cols, config);

    Ubicacion.associate = function(models) {
        Ubicacion.belongsToMany(models.Ubicaciones, {
            as: "estudios",
            through: "estudio_ubicacion",
            foreignKey: "id_ubicacion",
            otherKey: "id_estudio",
            timestamps: false,
        });
    };

    return Ubicacion;

};