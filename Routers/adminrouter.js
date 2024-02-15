const express=require('express')
const router=express.Router()
const admin=require("../controller/admincontroller")
const upload=require('../middleware/multer')
const multer = require('multer')


router.get( "/dashboard", admin.dashboard)
      .get( "/admin/users",admin.user)
      .get("/admin/product",admin.product)
      .get("/admin/category",admin.category)
      .get("/admin/addcategory",admin.addCategoryGet)
      .get("/admin/coupen",admin.coupen)
      .get("/admin/orders",admin.orders)
      .get("/admin/banner",admin.banner)
      .get('/admin/addproduct',upload.single('image'),admin.addproductGet)
      .post('/admin/addproduct',admin.addproductPost)

module.exports=router
