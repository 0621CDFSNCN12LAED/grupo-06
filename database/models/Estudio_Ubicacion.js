module.exports = (sequelize, dataTypes) => {
    let alias = "Estudios_Ubicaciones";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_estudio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_ubicacion: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        importe: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
    };

    let config = {
        tableName: "Estudio_Ubicacion",
        timestamps: false,

    };

    let Estudio_Ubicacion = sequelize.define(alias, cols, config);

    Estudio_Ubicacion.associate = function(models) {
        Estudio_Ubicacion.hasMany(models.Ubicacion, {
            as: "ubicaciones",
            foreignKey: "id"
        });
    };

    return Estudio_Ubicacion;

};