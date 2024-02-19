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

const User= mongoose.model("signupDatas",signupschema1)









const categorySchema1 = new mongoose.Schema({
    name: {
      type: String,
      require : true
    },
    Image: {
      type: String,
      require : true
  }
});

const categoryModel = mongoose.model("category", categorySchema1); ;


const allproducts=new mongoose.Schema({
  Image: {
    type: String,
    // required: true,
},
  productName: {
  type : String ,
  // require : true
},
price: {
  type :Number,
  // require : true

},
category:{
  type : String ,
  // require : true
},

quantity:{
  type : String ,
  // require : true
}

})

const  ProductsModel = mongoose.model('Products',allproducts);
module.exports={
  User,
  categoryModel,
  ProductsModel,

}