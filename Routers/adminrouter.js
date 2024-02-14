const express=require('express')
const router=express.Router()
const admin=require("../controller/admincontroller")


router.get( "/dashboard", admin.dashboard)
      .get( "/users",admin.user)
      .get("/product",admin.product)
      .get("/category",admin.category)
      .get("/coupen",admin.coupen)
      .get("/orders",admin.orders)
      .get("/banner",admin.banner)
      .get('/addproduct',admin.addproductGet)
      .post('/addproduct',admin.addproductPost)

module.exports=router
