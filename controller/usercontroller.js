const session = require('express-session')
const {ProductsModel}=require("../model/database")

module.exports={
    userHomeGet:async(req,res)=>{
const productshow=await ProductsModel.find({})
        // const koreanproducts=await koreanproduct.find()
    res.render('user/userHome',{allProducts:productshow})
    },
    
    userHomePost:(req,res)=>{
        

    },
    productdetailsGet:(req,res)=>{
            res.render("user/productdetails")
    },

}
