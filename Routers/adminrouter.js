const express=require('express')
const router=express.Router()
const admin=require("../controller/admincontroller")
const { categoryUpload, productUpload} =  require('../middleware/multer')


router.get( "/dashboard", admin.dashboard)
      .get( "/admin/users",admin.user)
      .get("/admin/products",admin.products)
      .get('/admin/addproducts',admin.addproductsGet )
      .post("/admin/addproducts",productUpload.array('productImage'),admin.addproductsPost)
      .get("/admin/category",admin.category)
      .get("/admin/addcategory",admin.addCategoryGet)
      .post("/admin/addcategory",categoryUpload.single('Image'), admin.addCategoryPost)
      .get("/admin/coupen",admin.coupen)
      .get("/admin/orders",admin.orders)
      .get("/admin/banner",admin.banner)
      .get('/admin/category/delete/:categoryId',admin.deleteCategoryGet)
      .get("/admin/editproducts/",admin.editCategoryGet)


module.exports=router

