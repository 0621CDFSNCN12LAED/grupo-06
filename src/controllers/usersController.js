const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const pacienteService = require("../services/paciente-service");
//const pacienteService = require("../services/paciente-service");

//Importo el JSON de usuarios
const pacientesFilePath = path.join(
    __dirname,
    "../data/pacientesDataBase.json"
);
const pacientes = JSON.parse(fs.readFileSync(pacientesFilePath, "utf-8"));

//Obtengo el ID mayor de pacientes
const pacienteMaximoId = Math.max.apply(
    Math,
    pacientes.map(function(o) {
        return o.id;
    })
);

//filtro el array de personas para quedarme solo con usuarios
const controller = {
    showLogin: (req, res) => {
        res.render("./users/ingresar");
    },
    login: (req, res) => {
        const paciente = pacienteService.getByEmail(req.body.email);
        console.log("paciente encontrado", paciente);
        //Si el paciente no fue encontrado por email:
        if (!paciente) {
            //corto ejecución
            res.redirect("back");
            return;
        }

        //Si encontré el paciente por email, debo verificar la contraseña ingresada:
        if (!bcrypt.compareSync(req.body.password, paciente.password)) {
            res.redirect("back");
            return;
        }

        //Si la pass dio true es porque coinciden, creo la session
        req.session.loggerPacienteId = paciente.id;
        console.log("ver esto", req.session.loggerPacienteId);
        //to do: mostrar mensaje de logueado exitosamente
        res.redirect("/");
    },

    registro: (req, res) => {
        res.render("./users/registro");
    },

    crearUsuario: (req, res) => {
        const paciente = {
            id: pacienteMaximoId + 1,
            nombre: req.body.firstname,
            apellido: req.body.lastname,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date,
            tipoDocumento: req.body.doc_type,
            nroDocumento: req.body.nroDocumento,
            password: bcrypt.hashSync(req.body.password, 12),
        };
        console.log(paciente);
        //Agrego el nuevo paciente al array de pacientes
        pacientes.push(paciente);

        //transformo el array de pacientes a JSON
        pacientesJSON = JSON.stringify(pacientes);

        //Guardar el nuevo paciente escribiendo el archivo de pacientes con el array JSON
        fs.writeFileSync(pacientesFilePath, pacientesJSON);

        res.redirect("/");
    },
    perfilUsuario: (req, res) => {
        res.render(".");
    },
};

//Exportamos módulo.
module.exports = controller;