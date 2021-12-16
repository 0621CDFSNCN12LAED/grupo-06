const bcrypt = require("bcryptjs");
const pacienteService = require("../../services/paciente-service");
const {validationResult} = require('express-validator');

const controller = {
    listadoPacientes: async(req, res) =>{
        
        const pacientes = await pacienteService.list();
        let total_pacientes = 0;
        let edad_promedio = 0;
        
        pacientes.map((paciente) => {
            total_pacientes += 1;
            
            //Calculo de edad:
            let today = new Date();
            let fechaCumpleaños = new Date(paciente.fecha_nacimiento);
            let edad = today.getFullYear() - fechaCumpleaños.getFullYear();

            let m = today.getMonth() - fechaCumpleaños.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < fechaCumpleaños.getDate())) {
                edad--;
            }
            edad_promedio += edad;            
            
            if(paciente.estado == true){
                paciente.estado = 'Activo';
            }else{
                paciente.estado = 'Inactivo';
            }

            paciente.dataValues.url = 'api/users/' + paciente.id;
            
            //Elimino atributos
            delete paciente.dataValues.contrasenia;
            delete paciente.dataValues.terminos;
        });
        
        if(pacientes){
            res.json({
                count: total_pacientes,
                pacientes: pacientes,
                edad_promedio: Math.round((edad_promedio / total_pacientes) * 100, 1) / 100
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