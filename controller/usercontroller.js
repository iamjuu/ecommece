const session = require("express-session");
const { ObjectId } = require("mongodb"); //for deteting category //

const {  ProductsModel } = require("../model/database");
const { User } = require("../model/database");
const {profilemodel} =require ('../model/database')
const {wishlistmodel}=require('../model/database')


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

profile:async(req,res)=>{
const userId=req.session._id
console.log(userId);

const user=await User.findById(userId) 
console.log('user:',user);
  res.render("user/profile",{user})
},
editprofileGet:async(req,res)=> {
res.render("user/addProfile")
},

editprofilePost:(req,res)=>{

}
  
}
