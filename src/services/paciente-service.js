const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

//Importo el JSON de usuarios
const pacientesFilePath = path.join(
    __dirname,
    "../data/pacientesDataBase.json"
);

const pacientes = JSON.parse(fs.readFileSync(pacientesFilePath, "utf-8"));

module.exports = {
    getByEmail: (email) => {
        const paciente = pacientes.find((paciente) => {
            if (paciente.email == email) {
                return paciente;
            }
        });
        return paciente;
    },
};