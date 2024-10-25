var User= require('../Models/user')

async function add (req, res)
{
   try{ 
    const user=new User(req.body)
   await user.save();
   res.status(200).send("good added")
   //console.log("added");
}catch(err){
    res.status(400).send(err)
  
}
}
function show(req, res)
{
    console.log("notre class 2CINFO1");
}

async function showuser(req,res){
    try{
    const user= await User.find();
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}
async function showuserid(req,res){
    try{
    const user= await User.findById(req.params.id);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}
async function showusername(req,res){
    try{
    const user= await User.findOne(req.params.username);
    res.json(user);}
    catch(err){
        res.status(400).send(err)
    }
}
async function update (req, res)
{
   try{ 
    const user=await User.findByIdAndUpdate(req.params.id,req.body, {new:true});
    res.status(200).json(user);

}catch(err){
    res.status(400).send(err)
}
}

async function deletee (req, res)
{
   try{ 
    const user=await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted")

}catch(err){
    res.status(400).send(err)
}
}



/*route.get("/add/:username/:email/:cin", function (req, res)
{
new User({
    username:req.params.username,
    email:req.params.email,
    cin:req.params.cin}).save();
    res.send("test");
});*/
module.exports= {add, show, showuser, showuserid, showusername, update, deletee}