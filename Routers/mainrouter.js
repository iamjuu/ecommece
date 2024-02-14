const express=require('express')


const router=express.Router()
const{signupGet,
        signupPost,
        loginGet,
        loginPost,
        logoutGet,
        otpGet,otppost,
}=require('../controller/maincontroller')

const OTP=require('../middleware/otp')

// const {signupvalidation,loginvalidation}=require('../middleware/authetification')

router.get('/',signupGet)
        .post('/otp',signupPost)


        .get("/otp",otpGet)
        .post('/login',otppost)


        .get('/login',loginGet)
        .post('/userHome',loginPost)

        .get('/logout',logoutGet)
     


        module.exports=router
