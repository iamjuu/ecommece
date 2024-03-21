
const {User}=require('../model/database')

module.exports = {
    profileGet:async(req,res)=>{
        if(req.session.email){
       const user= await User.findById(req.session._id)
      
          res.status(200).render("user/profile",{user});
        }else{
          res.redirect("/login"); 
         }
      },


}