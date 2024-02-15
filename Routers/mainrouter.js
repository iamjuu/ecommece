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
  .get('/user/otp',otpGet)
  .post('/user/otp',otppost) 
  .get("/user/login",loginGet)
  .post("/user/login",loginPost)
  .get('/user/forgot',forgotGet)
  .post('/user/forgot',forgotPost)
  
  .get('/logout',logoutGet)

  module.exports=router