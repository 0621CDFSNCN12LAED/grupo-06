const autorLoggedMiddleware = (req,res, next) => {

    if (req.session.loggerPacienteId) {
 
       next();
 
    } else {
 
       res.redirect("/users/ingresar");
 
    }
 
 };
 
 module.exports= autorLoggedMiddleware;