const session = require("express-session");
const { User,Profile } = require("../model/database");
const { text } = require("body-parser");
const optsender = require("../utils/sendemails");
const otpcode = Math.floor(Math.random() * 900000) + 100000;
require("dotenv").config();


module.exports = {
  signupGet: (req, res) => {
    if (req.session.email) {
      res.redirect("/user/userHome");
    } else {
      res.render("user/signup");
    }
  },
// in signup post Headers. saving the data in data base 

  signupPost: async (req, res) => {
    // console.log(req.body);
    const { Username, email, phone, password, confirmpassword } = req.body;
    // calling a fuction for seding otp to email 
    optsender(email,otpcode );
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
    res.redirect("/user/otp");
  },
  otpGet: (req, res) => {
    res.render("user/otp");
  },
  otppost: (req, res) => {
    const { otp } = req.body;
    if (otpcode == otp) {
      res.redirect("/user/login");
    } else {
      res.redirect("/user/otp");
    }
  },

  loginGet: (req, res) => {
    if (req.session.email) {
      return res.redirect("/userHome");
    } else {
      res.render("user/login");
    }
  },

  loginPost: async (req, res) => {
    console.log(req.body.email);

    const email = req.body.email;
    // console.log(email);
    console.log(User);
    try {
// here checking the email .when the user enterd email are in the database 
      const user=await User.findOne({ email : email });

      console.log('user',user);

      if (user) {
        if (user.role) {
          req.session.role = user.role;
          res.render("admin/adminHome");
        } else {
          req.session.email = user.email;
          res.redirect("/user/userHome");
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
    // console.log('iam post');

    res.redirect("/user/login");
    // console.log(req.body);
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
