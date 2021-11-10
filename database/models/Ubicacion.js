module.exports = (sequelize, dataTypes) => {
    let alias = "Ubicacion";

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

    return Ubicacion;

};