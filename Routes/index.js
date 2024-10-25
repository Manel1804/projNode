var express= require("express")
var route= express.Router()
var userController= require('../Controller/userController')
var validate=require("../Middl/validate");

route.get("/show", userController.show);
route.post("/add",validate, userController.add);
route.get("/showuser", userController.showuser);
route.get("/showuserid/:id", userController.showuserid);
route.get("/showusername/:name", userController.showusername);
route.put("/update/:id",userController.update);
route.delete("/deletee/:id",userController.deletee);

route.get("/chatroute", function(req, res){
    res.render('chat')//nom page twig
});
module.exports= route;