const mongoose=require("mongoose")
const schema=mongoose.Schema
//Create and Save a Record of a Model:

const ContactScema=new schema({
    name:{type:String,unique:true},
    age:{type:Number },
    favoriteFoods : [String]
    
})


module.exports=Contact=mongoose.model("contats",ContactScema)