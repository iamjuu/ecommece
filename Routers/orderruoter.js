
const express=require('express')
const router=express.Router()


const{orders}=require("../controller/ordercontroller")

router.get("/orders",orders)


module.exports=router



