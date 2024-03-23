
const {User,addressmodel}=require('../model/database');
const { user } = require('./usercontroller');
module.exports = {
    

      addaddress:(req,res)=>{
if(req.session.email){
  res.render("user/address")
}
else{
  res.redirect('/login')
}
      },
      postaddaddress:async(req,res)=>{

const {houseNumber,locality,city,state,pinCode}=req.body

const userId = req.session._id
const user = await User.findById(userId)
let address = await addressmodel.findOne({userId:user._id})
if(!address){
  let newaddress = new addressmodel({
    userId:user._id,
    username:user.Username,

    addresss:[]
  })
  await newaddress.save()
  address=newaddress
}


const data={
  houseNumber,
  locality,
  city,
  state,
  pinCode
}
address.addresses.push(data)
await address.save()
res.redirect('/address')



}


}