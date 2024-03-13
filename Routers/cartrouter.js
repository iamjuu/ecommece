const express=require('express')
const router=express.Router()


const {CartGet,addtocartpost}=require("../controller/cartController")

router.get("/cart:id",CartGet)
router.get("/addtocart/:id",addtocartpost)
      




module.exports=router