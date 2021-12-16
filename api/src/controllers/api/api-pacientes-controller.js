const bcrypt = require("bcryptjs");
const pacienteService = require("../../services/paciente-service");
const {validationResult} = require('express-validator');

const controller = {
    listadoPacientes: async(req, res) =>{
        
        const pacientes = await pacienteService.list();
        let total_pacientes = 0;
        
        pacientes.map((paciente) => {
            total_pacientes += 1;
            delete paciente.dataValues.contrasenia;
            delete paciente.dataValues.terminos;
            delete paciente.dataValues.estado;            
            paciente.dataValues.url = 'api/users/' + paciente.id;
        });
        
        if(pacientes){
            res.json({
                count: total_pacientes,
                pacientes: pacientes,
            });

        } else {
            res.json({
                meta: {
                    status: 503,                    
                    url: 'api/pacientes',
                    descripcion: 'error'
                },
                data: 'no data'
            });
        }        
    },

    pacienteDetalle: async(req, res) =>{
        paciente = await pacienteService.searchOnePaciente(req.params.id);
        if(paciente){
            //paciente.dataValues.url = window.location.href;
            delete paciente.dataValues.contrasenia;
            delete paciente.dataValues.terminos;
            delete paciente.dataValues.estado;
            res.json(paciente);
        }
    },
};

//Exportamos módulo.
module.exports = controller;