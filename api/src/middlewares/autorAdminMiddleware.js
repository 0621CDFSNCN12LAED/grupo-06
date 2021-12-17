const autorAdminMiddleware = (req,res, next) => {

    if (req.user == undefined) {
 
       res.redirect("back");
 
    }
    
    if (req.user.userCategoryId == 2){
 
       next();
 
    } else {
 
       res.redirect("back");
 
    }
 
 };
 
 module.exports= autorAdminMiddleware;