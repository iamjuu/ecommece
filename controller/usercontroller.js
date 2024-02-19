const session = require('express-session')
const { koreanproduct } = require('../model/database')


module.exports={
    userHomeGet:(req,res)=>{

        // const koreanproducts=await koreanproduct.find()
    res.render('user/userHome')
    },
    
    userHomePost:(req,res)=>{
        

    },
    productdetailsGet:(req,res)=>{
            res.render("user/productdetails")
    },

}
