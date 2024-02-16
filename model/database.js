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


//Profile Schema(profile collection)
const profileSchema1 = new mongoose.Schema({
    userId: {
      type: mongoose.Types.ObjectId,  
    },
    Username:{
      type: String,
       required: true,
    },
    age: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
  });

  const Profile=mongoose.model("userProfiles",profileSchema1)

//Product Schema(products collection)
const productSchema = new mongoose.Schema({
  imageUrl: {
      type: String,
      required: true,
  },
  categoryName: {
      type: String,
      required: true,
  },
  price: {
      type: Number,
      required: true,
  },
  description: {
      type:String,
      required:true
  },
});
const Product=mongoose.model("userproduct",profileSchema1)



const categorySchema1 = new mongoose.Schema({
    name: {
      type: String,
    },


    Image: {
      type: String,
  }
});

const categoryModel = mongoose.model("category", categorySchema1); ;

module.exports={
    User,
    Profile,
    Product,
    categoryModel,

}