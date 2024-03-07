const express = require("express");
const router = express.Router();

const {wishlistGet,addwishlisttogglePost}=require('../controller/wishlistcontroller')


router.get('/wishlist',wishlistGet)
      .post('/addwishlisttogglePost/:productId',addwishlisttogglePost)


      module.exports=router;  