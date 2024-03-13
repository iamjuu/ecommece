const session = require("express-session");
const { ObjectId } = require("mongodb"); //for deteting category //

const {wishlistmodel, User, ProductsModel,profilemodel, } = require("../model/database");
const { Mongoose } = require("mongoose");
const Lookups = require("twilio/lib/rest/Lookups");


module.exports = {

    user: async (req, res) => {
    const USR = await User.find();
    res.render("admin/users", { users: USR });
  },

    userHomeGet: async (req, res) => {
    const productshow = await ProductsModel.find();
    let userwishlist=null
    if (req.session.email){
      const userId= req.session._id
      userwishlist= await  wishlistmodel.findOne( {user: userId})
    }
    res.render("user/userHome", { allProducts: productshow,userwishlist });

  },

profileGet:async(req,res)=>{

res.status(200).render("user/profile");

},

profilepost:async(req,res)=>{
  try {
    const accountId = req.session.userId;
    let userProfile = await User.findOne({ _id: accountId });
    if (!userProfile) {
      return res.status(404).send("User not found");
    }
 
    console.log(err,'erroor in profile post ');
    const { age, address } = req.body;
    const { name, email, phone } = userProfile;
    const userId = userProfile._id;
    const profileUpdateResult = await Profile.findOneAndUpdate(
      { userId: accountId },
      {
        $set: {
          userId: accountId,
          age: age,
          address: address,
          name: name,
          email: email,
          phone: phone,
        },
      },
      { upsert: true}
  )
  res.send(
    '<script>alert("Profile Updated"); window.location="/userhome";</script>'
  )
}catch(err){
  console.error("Error updating profile:", err)
  res.status(500).send("Internal Server Error")
}
}
}
