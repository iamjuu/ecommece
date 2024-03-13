const express = require("express");
const router = express.Router();

const {user,profileGet,profilepost}=require("../controller/usercontroller")
const { userHomeGet } = require("../controller/usercontroller");
const {CartGet}=require("../controller/cartController")


router.get("/users",user)
      .get("/userHome", userHomeGet)
      .get("/cart",CartGet)
      .get("/profile", profileGet)
      .get("/profile",profilepost) // get the profile page of a




module.exports = router;
