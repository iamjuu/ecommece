const session = require("express-session");
const { ObjectId } = require("mongodb"); //for deteting category //

const {wishlistmodel, User, ProductsModel,profilemodel,BannarModel } = require("../model/database");
const { Mongoose } = require("mongoose");
const Lookups = require("twilio/lib/rest/Lookups");
const { Redirect } = require("twilio/lib/twiml/VoiceResponse");

module.exports = {

    user: async (req, res) => {
    const USR = await User.find();
    res.render("admin/users", { users: USR });
  },

    userHomeGet: async (req, res) => {
     
    const productshow = await ProductsModel.find();
    const bannarshow=await BannarModel.find()
    let userwishlist=null
    if (req.session.email){
      const userId= req.session._id
      userwishlist= await  wishlistmodel.findOne( {user: userId})
    }
    res.render("user/userHome", { allProducts: productshow,bannarshow,userwishlist,bannarshow });

  },


}
