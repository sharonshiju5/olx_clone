import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    brand:{type:String,require:true},
    name:{type:String,require:true},
    year:{type:String,require:true},
    fuel:{type:String,require:true},
    transmission:{type:String,require:true},
    km:{type:String,require:true},
    owner:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    state:{type:String,require:true},
    city:{type:String,require:true},
    neighbourhood:{type:String,require:true},
    phone:{type:String,require:true},
    picture:{type:Array,require:true},
})

export default mongoose.model.Products||mongoose.model("Products",productSchema)