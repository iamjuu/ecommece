const express=require('express')
const router=express.Router()

const {coupon,addcoupenGet,addcouponPost}=require("../controller/couponController")

router.get("/coupon",coupon)
    .get("/addcoupenGet",addcoupenGet)
    .post("/addcouponPost",addcouponPost)


module.exports=router