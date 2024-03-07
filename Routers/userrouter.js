const express = require("express");
const router = express.Router();

const {user,profile,editprofileGet}=require("../controller/usercontroller")
const { userHomeGet } = require("../controller/usercontroller");
const {addToCartGet}=require("../controller/cartController")


router.get("/users",user)
      .get("/userHome", userHomeGet)
      .get("/cart",addToCartGet)
      .get("/profile", profile)
      .get("/user/addprofile",editprofileGet) // get the profile page of a




module.exports = router;
