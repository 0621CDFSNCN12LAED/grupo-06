const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");
const db = require('../../database/models');

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

    crearPaciente: async(payload) => {
        await db.Pacientes.create({
            nombre: payload.firstname,
            apellido: payload.lastname,
            tipo_documento: payload.doc_type,
            nro_documento: payload.nroDocumento,
            fecha_nacimiento: payload.birth_date,
            genero: payload.gender,
            img_perfil: payload.file ? payload.file.filename : "",
            email: payload.email,
            contrasenia: bcrypt.hashSync(payload.password, 12),
            terminos: payload.term ? true : false,

        });
    },

    actualizarPaciente(payload) {
        db.Pacientes.update({
            email: payload.email,
            contrasenia: bcrypt.hashSync(payload.password, 12),
        });
    },

    eliminarPaciente(id) {

    },

};