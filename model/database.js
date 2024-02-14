const mongoose=require('mongoose')

const signupschema1= new mongoose.Schema({
    Username:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
    },
    phone:{
        type:String,
        // required:true,
    },
    password:{
        type:String,
        // required:true,
    },
    role:{
        type:Boolean,
        default:false
    }
    
})




module.exports={
    User:mongoose.model("signupDatas",signupschema1),


}