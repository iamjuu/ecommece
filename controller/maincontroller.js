const session = require("express-session");
const { User } = require("../model/database");

const { text } = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config()

const otpGenerator = require('otp-generator')

const optsender=require('../utils/sendemails')
// const generateOTP=()=>{
//   return Math.floor(1000 + Math.random() * 9000).toString();
// }

const otps =Math.floor(Math.random()*900000)+ 100000;

module.exports = {
  signupGet: (req, res) => {


    if (req.session.email) {
      res.redirect("user/userHome");
    } else {
      res.render("user/signup")
      
    }
  },

  signupPost: async (req, res) => {
    console.log(req.body);
    const { Username, email, phone, password, confirmpassword } = req.body;
    optsender(email,otp)

    const data = {
      name: Username,
      email: email,
      phone: phone,
      password: password,
    };
    
    
    const newuser = await User.create(data);

await newuser.save()

    
    

res.redirect("/user/otp")
  }
  ,
  otpGet:  (req, res) => {  
    res.render("/user/otp");


  },
  otppost: (req, res) => {

    const{otp}=req.body
   if( otps== otp){
    res.redirect('/user/login')
   }
   else{
    res.redirect('/user/otp')
   }

  },


  loginGet: (req, res) => {
    if (req.session.email) {
      return res.redirect("/userHome");
    } else {
      res.render("user/login");
    }

  },

  loginPost: async  (req, res) => {

    console.log(req.body.email);
    
    const email = req.body.email;
    console.log(email);

    try {
      const usr = await User.findOne({ email: email });
      console.log(usr);

      if (usr) {
        if (usr.role) {
          req.session.role = usr.role;
          // res.redirect("/admin/adminHome");
                res.render("admin/adminHome");

        } else {
          req.session.email = usr.email;
          res.redirect("/user/userHome");
        }
      } else {

        res.render("login");
      }

    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  logoutGet: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("/login");
    });
  },

  forgotGet:(req,res)=>{
    res.render('user/forgot')
  },

  forgotPost:(req,res)=>{

console.log('sending otp');
    
   
   
    

    
res.redirect("/forgot")

  },
  EmailVerificationGet:(req,res)=>{
    res.render('emailverfication')
  },
  EmailVerificationPost:(req,res)=>{

  }






}








