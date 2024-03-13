const mongoose=require('mongoose');
const { required } = require('nodemon/lib/config');

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
    },
    verified:{
      default:false,
      type:Boolean

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
  Image: [{
    type: String,
    // required: true,
}],
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
  // required : true
},
description:{
  type : String ,
  // required : true
},
discount:{
  type:  Number,
    // required : true  
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





const allbannars= new mongoose.Schema({
  Image:[{
    type:String,
    // required:true,
  }],
  bannername:{
    type:String,
     // required:true  
  },
  Amount:{
  type:Number,
     // required:true  

  },
  startingDate:{
    type:String,
    // required:true  
  },
  endingDate:{
    type:String,
    // required:true  
  }
})
const BannarModel=mongoose.model('Bannar',allbannars);

const profiles=new mongoose.Schema({

  user:{
    type:mongoose.Types.ObjectId,
  },
  Username: {type: String ,
    // required: true 
},
  email: {type: String,
        // required: true   
  },

  phone:{
    type : Number,
    required:true
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }

  

})
const profilemodel=mongoose.model('profile',profiles)


const wishlists= new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'signupDatas',
    required:true
  },
  products:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Products',


  }]
})
const wishlistmodel=mongoose.model('wishlist',wishlists)



//database schema for cart
const Carts=new mongoose.Schema({
  userId :{
    type: mongoose.Schema.Types.ObjectId,
  },
  products:[{
    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
    quantity:{
      type:Number,
      default:1,
      // required:true
    },
    price:{
      type:Number,
      // required:true 
    }

  }],
  subAmount:{
    type:Number,
    // required:true
  },
  totalAmount:{
    type:Number,
    // required:true
  },


  
})
const cartModel =mongoose.model('cart',Carts);


module.exports={
  User,
  categoryModel,
  ProductsModel,
  CouponModel,
  cartModel,
  BannarModel,
  profilemodel,
  wishlistmodel

}