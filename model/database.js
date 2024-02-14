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

const koreanschma=new mongoose.Schema({

    imageurl:{
        type:String,
        required:true
        
    },
   name :{
        type:String,
        required:true
        
    },
    price:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true
        
    }

})


const planeschma=new mongoose.Schema({
    imageurl:{
        type:String,
        // required:true
        
    },
   name :{
        type:String,
        // required:true
        
    },
    price:{
        type:String,
        // required:true
        
    },
    description:{
        type:String,
        // required:true
        
    }

})

module.exports={
    User:mongoose.model("signupDatas",signupschema1),
    koreanproduct:mongoose.model(" korean",koreanschma),
    planeproduct:mongoose.model('plane',planeschma)

}