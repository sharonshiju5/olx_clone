import productSchema from '../models/product.model.js';

export async function addPost(req, res, ) {
    const {brand,name,year,fuel,transmission,km,owner,description,price,state,city,neighbourhood,phone,picture}=req.body;
    console.log(brand,name,year,fuel,transmission,km,owner,description,price,state,city,neighbourhood,phone,picture);
    // console.log(moviespic);


    await productSchema.create({brand,name,year,fuel,transmission,km,owner,description,price,state,city,neighbourhood,phone,picture}).then(()=>{
        res.status(200).send({msg:"successfully added"})
    }).catch((err)=>{
        res.status(500).send({msg:err})
    })
    
    
    
}