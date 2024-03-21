const express = require("express");
const router = express.Router();


const {
    signupGet,
    signupPost,
    otpGet,
    otppost,
    loginGet,
    loginPost,
    forgotGet,
    forgotPost,
    logoutGet,
  } = require("../controller/maincontroller");

  router.get('/signup',signupGet)
  .post('/signup',signupPost)
  .get('/otp',otpGet)
  .post('/otp',otppost) 
  .get("/login",loginGet)
  .post("/login",loginPost)
  .get('forgot',forgotGet)
  .post('forgot',forgotPost)
  
  .get('/logout',logoutGet)

  module.exports=router