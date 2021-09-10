const path = require("path");
const fs = require("fs");

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
    ingresar: (req, res) => {
        res.render("./users/ingresar");
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
            password: req.body.password,
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