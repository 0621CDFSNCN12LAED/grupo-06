const autorGuestMiddleware = (req,res, next) => {

    if (req.session.loggerPacienteId == undefined) {
 
       next();
 
    } else {
 
       res.redirect("/users/perfil");
 
    }
 
 };
 
 module.exports= autorGuestMiddleware;