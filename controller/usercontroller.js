const session = require('express-session')
const { koreanproduct } = require('../model/database')


module.exports={
    userHomeGet:async(req,res)=>{

        const koreanproducts=await koreanproduct.find()
    res.render('userhome',{koreanproducts})
    },
    
    userHomePost:(req,res)=>{
        

    }
}
