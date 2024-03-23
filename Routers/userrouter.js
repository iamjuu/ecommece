const express = require("express");
const router = express.Router();

const user=require("../controller/usercontroller")
const cart=require("../controller/cartController")
const profile=require('../controller/profilecontroller')
const wishlist=require('../controller/wishlistcontroller')
const coupon=require('../controller/couponController')
const checkout=require("../controller/checkoutcontroller")
const order=require("../controller/ordercontroller")




router.get("/users",user.user)
      .get("/userHome",user.userHomeGet)
      .get("/cart",cart.CartGet)
      .get("/addtocart/:id",cart.addtocartpost)


      .post("/productdelete/:id",cart.productdelete)
      .get("/cartupdate",cart.cartupdate)


    
      .get("/address",profile.addaddress)
      .post("/address",profile.postaddaddress)

      .get('/wishlist',wishlist.wishlistGet)
      .post('/addwishlisttogglePost/:productId',wishlist.addwishlisttogglePost)
      .delete('/wishlist/delete/:id',wishlist.wishlistdelete)

      .post('/applycoupon',coupon.applycoupon)


      .get("/checkout",checkout.checkoutGet)
      .post("/checkout",checkout.checkoutPost)


      .get("/orderplaced",order.orderplaced)

module.exports = router;
