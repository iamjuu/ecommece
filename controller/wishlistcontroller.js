const { Redirect } = require('twilio/lib/twiml/VoiceResponse')
const {wishlistmodel}=require('../model/database')
const session = require("express-session");

module.exports={
wishlistGet:async(req,res)=>{

if(req.session.email){
    const userId=req.session._id
    const wishlist=await  wishlistmodel.findOne({user:userId}).populate('products')
    res.render("user/wishlist",{data:wishlist.products})
}else{
   res.redirect('/login');
}

},
addwishlisttogglePost:async(req,res)=>{
if(req.session.email){
    const userId=req.session._id
    const productId=req.params.productId
    console.log(productId);
    let wishlist=await wishlistmodel.findOne( {'user':userId })
    if(!wishlist){
        wishlist=new wishlistmodel({'user':userId,products:[]});
    }

    const {isredcolor}=req.body 
    const remove = isredcolor === 'true'
if(remove){
    wishlist.products.pull(productId)

}else{
    wishlist.products.push(productId)
}
await wishlist.save()
console.log('wishlist:',wishlist);
res.status(200).json({success:true})


}else{
    console.log('hi');
   res.redirect('/user/login');

}
},

}