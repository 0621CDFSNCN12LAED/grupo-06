const {body} = require('express-validator');

const validacionesPacienteLogin = [
    body("email")
        .notEmpty().withMessage('Se debe ingresar el email').bail()
        .isEmail().withMessage('El mail debe tener un formato válido'),
    body('password')
        .notEmpty().withMessage('Se debe ingresar una password').bail()
        .isLength({min:8}).withMessage('La contraseña debe ser mínimo de 8 caracteres'),       
];

module.exports = validacionesPacienteLogin; 