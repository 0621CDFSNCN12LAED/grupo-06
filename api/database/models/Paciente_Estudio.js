module.exports = (sequelize, dataTypes) => {
    let alias = "Pacientes_Estudios";

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
        tableName: "Paciente_Estudio",
        timestamps: false,

    };

    let Paciente_Estudio = sequelize.define(alias, cols, config);

    return Paciente_Estudio;

};