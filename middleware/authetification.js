
const bcrypt=require('bcrypt')

const {User}=require('../model/database')

const {ObjectId}=require('mongoose').Types

const signupvalidation=async(req,res,next)=>{
    try{
        const {
            Username,
             email,
             phone,
             password,
             confirmpassword,
                 }=req.body   
                 const olduser=await User.findOne({email:email})
                 if(olduser){
                    return res.status(401).send({message:'email already existed'})

                 }
                 if(password!==password){
                    return res.status(400).send({message:'password does not much'})
                    const hash=await bcrypt.hash(password,10)
                    const Data={
                        Username:Username,
                        email:email,
                        phone:phone,
                        passowrd:password
                    }
                    const newuser=new User(Data)
                    await newuser.save()
                    next()
                 }
                }
                catch(err){
                    console.log('err');
                }
}

const loginvalidation= async (req,res,next)=>{
    const {
        email,
        password
    }=req.body
    
    if(!email||!password){
        err="both required"
         return res.redirect('/login')
    }
    try{
        const user = await User.findOne({email:email})
        console.log(user);
        if (!user) {
                return res.status(400).render('login',{Error:'user not found'})
        }
    const validpass=await bcrypt.compare(password,user.password)
    if (!validpass) {
        return res.render('login',{Error:'invalid password'})
    
    
    
    }else{
        // req.session.email=user.email
        // req.session.role=user.role
        console.log(user._id);
        req.session.userId= user._id
        next()
    
    }
    
    
    }
    catch(err){
        console.log(err)
        res.status(500).send({
            Error:`server error ` })
    }
    }
    module.exports={
        signupvalidation,loginvalidation
    }
    