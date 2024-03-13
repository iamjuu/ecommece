const { Redirect } = require('twilio/lib/twiml/VoiceResponse')
const {wishlistmodel}=require('../model/database')
const session = require("express-session");
const mongoose = require('mongoose')
const {User} = require('../model/database')
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
    let wishlist=await wishlistmodel.findOne( {user:userId })
    if(!wishlist){
        wishlist=new wishlistmodel({user:userId,products:[]});
    }

    const { isredcolor }=req.body 
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

wishlistdelete: async (req, res) => {
    if (req.session.email) {
        try {
            const productid = req.params.id;
            const idofProduct =new mongoose.Types.ObjectId(productid);
            console.log(idofProduct);
            const userEmail = req.session.email;
            const userDetails = await  User.findOne({ email: userEmail });
            const user  = userDetails._id
            const userId = new mongoose.Types.ObjectId(user);
            const result = await wishlistmodel.updateOne(
                { user: userId },
                { $pull: { products: idofProduct } },
            );
            res.status(200).json({ message: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: false, error: error.message });
        }
    } else {
        res.status(401).redirect('/login');
    }
}
}
