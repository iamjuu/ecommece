const express = require("express");
const router = express.Router();

const user=require("../controller/usercontroller")
const cart=require("../controller/cartController")
const profile=require('../controller/profilecontroller')
const wishlist=require('../controller/wishlistcontroller')
const order=require("../controller/ordercontroller")


router.get("/users",user.user)
      .get("/userHome",user.userHomeGet)
      .get("/cart",cart.CartGet)
      .get("/addtocart/:id",cart.addtocartpost)
      .get("/productdelete/:id",cart.productdelete)
      .get("/cartupdate",cart.cartupdate)


      .get("/profile",profile.profileGet)

      .get('/wishlist',wishlist.wishlistGet)
      .post('/addwishlisttogglePost/:productId',wishlist.addwishlisttogglePost)
      .delete('/wishlist/delete/:id',wishlist.wishlistdelete)

 
      .get('/order',order.orderGet) 

module.exports = router;
