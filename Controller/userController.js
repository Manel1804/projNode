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