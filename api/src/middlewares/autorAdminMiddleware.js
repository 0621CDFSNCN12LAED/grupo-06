const autorAdminMiddleware = (req,res, next) => {

    if (req.user == undefined) {
 
       res.redirect("back");
 
    }
    
    if (req.user.userCategoryId == 1){
 
       next();
 
    } else {
 
       res.redirect("back");
 
    }
 
 };
 
 module.exports= autorAdminMiddleware;