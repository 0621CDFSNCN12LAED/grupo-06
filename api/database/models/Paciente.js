module.exports = (sequelize, dataTypes) => {
    let alias = "Pacientes";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        tipo_documento: {
            type: dataTypes.STRING(10),
            allowNull: false,
        },
        nro_documento: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        genero: {
            type: dataTypes.STRING(1),
            allowNull: false,
        },
        img_perfil: {
            type: dataTypes.STRING(150),
            allowNull: true,
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        contrasenia: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        terminos: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        estado: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
    };

    let config = {
        tableName: "Pacientes",
        timestamps: false,
    };

    let Paciente = sequelize.define(alias, cols, config);


    return Paciente;
};