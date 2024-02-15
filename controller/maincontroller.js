const session = require("express-session");
const { User,Profile } = require("../model/database");
const { text } = require("body-parser");
const optsender = require("../utils/sendemails");
const otps = Math.floor(Math.random() * 900000) + 100000;
require("dotenv").config();


module.exports = {
  signupGet: (req, res) => {
    if (req.session.email) {
      res.redirect("/user/userHome");
    } else {
      res.render("user/signup");
    }
  },


  signupPost: async (req, res) => {
    console.log(req.body);
    const { Username, email, phone, password, confirmpassword } = req.body;
    optsender(email, otps);

    const data = {
      name: Username,
      email: email,
      phone: phone,
      password: password,
    };

    const newuser = await User.create(data);

    await newuser.save();

    console.log(newuser)

    res.redirect("/user/otp");
  },
  otpGet: (req, res) => {
    res.render("user/otp");
  },
  otppost: (req, res) => {
    const { otp } = req.body;
    if (otps == otp) {
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
    console.log(email);
    console.log(User);
    try {

      const user=await User.findOne({ email : email });

      console.log('user',user);

      if (user) {
        if (user.role) {
          req.session.role = user.role;
          // res.redirect("/admin/adminHome");
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
