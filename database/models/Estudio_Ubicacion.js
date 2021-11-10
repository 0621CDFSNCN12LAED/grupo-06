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
        id_paciente: {
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

    return Estudio_Ubicacion;

};