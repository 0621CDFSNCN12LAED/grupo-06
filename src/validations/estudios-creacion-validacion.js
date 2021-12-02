const {body} = require('express-validator');


//Validaciones del registro de paciente
//Validaciones de la creación de estudios
const validacionesEstudioCreacion = [
    body("title")
        .notEmpty().withMessage('Se debe ingresar el nombre del estudio'),
    body('desc')
        .notEmpty().withMessage('Se debe ingresar descripción del estudio'),
    body('antes')
        .notEmpty().withMessage('Se debe ingresar los pre requisitos del estudio'),
    body('option')
        .notEmpty().withMessage('Se debe ingresar las opciones posibles para realizar del estudio'),
    body('price')
        .notEmpty().withMessage('Se debe ingresar el precio del estudio').bail()
        .isNumeric().withMessage('Se debe ingresar un valor numérico'),   
];


module.exports = validacionesEstudioCreacion; 