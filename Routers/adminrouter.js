const express=require('express')
const router=express.Router()
const admin=require("../controller/admincontroller")
const {productUpload, categoryUpload} = require('../middleware/multer')


router.get( "/dashboard", admin.dashboard)
      .get( "/admin/users",admin.user)
      .get("/admin/product",admin.product)
      .get("/admin/category",admin.category)
      .get("/admin/addcategory",admin.addCategoryGet)
      .post("/admin/addcategory",categoryUpload.single('Image'), admin.addCategoryPost)
      .get("/admin/coupen",admin.coupen)
      .get("/admin/orders",admin.orders)
      .get("/admin/banner",admin.banner)
      // .get('/admin/addproduct',upload.single('image'),admin.addproductGet)
      .post('/admin/addproduct',admin.addproductPost)
      .get('/admin/category/delete/:categoryId',admin.deleteCategoryGet)

module.exports=router

