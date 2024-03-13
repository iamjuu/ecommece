const express = require("express");
const router = express.Router();

const {wishlistGet,addwishlisttogglePost,wishlistdelete}=require('../controller/wishlistcontroller')


router.get('/wishlist',wishlistGet)
      .post('/addwishlisttogglePost/:productId',addwishlisttogglePost)
      .delete('/wishlist/delete/:id',wishlistdelete)


      module.exports=router;  