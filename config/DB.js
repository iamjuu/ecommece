const mongoose=require("mongoose")

const conncetDb=async()=>{

try{

    mongoose.connect('mongodb://127.0.0.1/storeCollections')
}catch(error){
    console.log(error, "Could not connect to the database");
}
}

module.exports=conncetDb

