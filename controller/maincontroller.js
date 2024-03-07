const session = require("express-session");
const { User,Profile } = require("../model/database");
const { text } = require("body-parser");
const optsender = require("../utils/sendemails");
const otpcode = Math.floor(Math.random() * 900000) + 100000;
require("dotenv").config();


module.exports = {
  signupGet: (req, res) => {
    if (req.session.email) {
      res.redirect("/userHome");
    } else {
      res.render("user/signup");
    }
  },
// in signup post Headers. saving the data in data base 

  signupPost: async (req, res) => {
    // console.log(req.body);
    const { Username, email, phone, password, confirmpassword } = req.body;

req.session.email =email

    // calling a fuction for sending otp to email 
       
   

    const data = {
      Username: Username,
      email: email,
      phone: phone,
      password: password,
    };
    const newuser = await User.create(data);

  // saving the data into database 
    await newuser.save();
    console.log(newuser)
    res.redirect("otp");
  },
  otpGet: (req, res) => {
    console.log(`this is email`,req.session.email);

const {email} =req.session
// console.log(email)
    optsender(email,otpcode)


    res.render("user/otp");

  },
  otppost: (req, res) => {
    const { otp } = req.body;
    console.log(otp)
    console.log(otpcode);
    if (otpcode == otp) {
      console.log(8);
      res.redirect("login");
    } else {
      
      res.redirect("otp");
    }
  },

  loginGet: (req, res) => {

    res.render("user/login");
  },

  loginPost: async (req, res) => {


    const email = req.body.email;
    try {
      
      const user=await User.findOne({ email : email });
      
      req.session._id=user._id
      // console.log('user',user);

      if (user) {
        if (user.role) {
          req.session.role = user.role;
          res.render("admin/adminHome");
        } else {
          req.session.email = user.email;
          // console.log('  req.session.email',  req.session.email);
          res.redirect("userHome");
        }
      } else {
        res.render("user/login");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  forgotGet: (req, res) => {
    res.render("user/forgot");
  },

  forgotPost: (req, res) => {

    res.redirect("login")  ;

  },

  logoutGet: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("/login");
    });
  },
};
