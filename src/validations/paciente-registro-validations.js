const {check} = require('express-validator');


//Validaciones del registro de paciente
const validacionesRegistroPaciente = [
    check('firstname')
        .notEmpty().withMessage('Se debe completar el Nombre').bail()
        .isAlpha().withMessage('Se deben ingresar caracteres alfabéticos en el nombre'),
    check('lastname')
        .notEmpty().withMessage('Se debe completar el Apellido').bail()
        .isAlpha().withMessage('Se deben ingresar caracteres alfabéticos en el apellido'),
    check('doc_type')
        .notEmpty().withMessage('Se debe completar el Tipo de Documento'),
    check('nroDocumento')
        .notEmpty().withMessage('Se debe completar el Número de Documento').bail()
        .isInt().withMessage('Se deben ingresar caracteres numéricos en el número DNI'),
    check('birth_date')
        .notEmpty().withMessage('Se debe completar la fecha de nacimiento').bail()
        .isDate().withMessage('Debe ser una fecha válida'),
    check('gender')
        .notEmpty().withMessage('Se debe elegir un género'),
    check('email')
        .notEmpty().withMessage('Se debe ingresar el mail de contacto').bail()
        .isEmail().withMessage('El mail debe tener un formato válido'),
    check('reEmail')
        .notEmpty().withMessage('Se debe corrborar el mail de contacto').bail()
        .isEmail().withMessage('El mail debe tener un formato válido'),
    check('password')
        .notEmpty().withMessage('Se debe ingresar una contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe ser mínimo de 8 caracteres'),
    check('rePassword')
        .notEmpty().withMessage('Se debe corroborar una contraseña').bail(),
    check('term')
        .notEmpty().withMessage('Se deben aceptar los términos y condiciones'),
];


module.exports = validacionesRegistroPaciente; 