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
  // required : true
},
price: {
  type :Number,
  // required : true

},
category:{
  type : String ,
  // required : true
},

quantity:{
  type : String ,
  required : true
}

})

const  ProductsModel = mongoose.model('Products',allproducts);



const allcoupons=new mongoose.Schema({
  couponName:{
    type:String,
    // required:true
  },
  couponDiscount: {
    type: String,
    required: true,
  },
  minOrderAmount:{
    type:Number,
    // required:true
  },
  maxOrderAmount:{
    type:Number,
    // required:true
  },
  startingDate:{
    type: Date,
    // required:true
  },
  endingDate:{
    type: Date,
    // required:true

  }


})
const  CouponModel = mongoose.model('coupons',allcoupons)







module.exports={
  User,
  categoryModel,
  ProductsModel,
  CouponModel,

}