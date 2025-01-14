import userSchema from "../models/user.model.js"


export async function addUser(req,res) {
    const {username,email,password}=req.body;
    console.log(username,email,password);
    //check fields are empty
    if(!(username&&email&&password))
     return(res.status(404).send({msg:"fields are empty"}));

    await userSchema.create({username,email,password}).then(()=>{
        res.status(201).send({msg:"successfully created"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
}