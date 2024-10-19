var express= require("express")
var route= express.Router()



route.get("/show", function (req, res)
{
    console.log("notre class 2CINFO1");
});
route.get("/add/:username/:email/:cin", function (req, res)
{
new User({
    username:req.params.username,
    email:req.params.email,
    cin:req.params.cin}).save();
    res.send("test");
});

route.post("/add", );
route.get("/showuser", async function(req,res){
    try{
    const user= await User.find();
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
});
route.get("/showuser/:id", async function(req,res){
    try{
    const user= await User.findById(req.params.id);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
});
route.get("/showusername/:name", async function(req,res){
    try{
    const user= await User.findOne(req.params.username);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
});
route.put("/update/:id",async function (req, res)
{
   try{ 
    const user=await User.findByIdAndUpdate(req.params.id,req.body, {new:true});
    res.status(200).json(user);

}catch(err){
    res.status(400).send(err)
}
});
route.delete("/delete/:id",async function (req, res)
{
   try{ 
    const user=await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted")

}catch(err){
    res.status(400).send(err)
}
});
module.exports=route