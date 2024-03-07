const express=require('express')
const router=express.Router()
const {dashboard,}=require("../controller/admincontroller")



const { categoryUpload, productUpload,bannarupload} =  require('../middleware/multer')


router.get( "/dashboard", dashboard)



      // .get( "/users",admin.user)


     


      // .get("/category",admin.category)
      // .get("/addcategory",admin.addCategoryGet)
      // .post("/addcategory",categoryUpload.single('Image'), admin.addCategoryPost)


      // .get("/coupon",admin.coupon)
      // .get("/addCoupon",admin.addcoupenGet)
      // .post("/addCoupon",admin.addcouponPost)


      // .get("/orders",admin.orders)

      // .get("/bannar",admin.bannar)
      // .get("/addbannar",admin.addBannarGet)
      // .post("/addbannar" ,bannarupload.single('Image'),admin.addBannarPost)


      // .get('/category/delete/:categoryId',admin.deleteCategoryGet)
      // .delete("/products/delete/:_id",admin.deleteproductsGet)
      // .get("/bannar/delete/:bannarId",admin.deletebannarGet)
      // .get("/coupon/delete/:couponId",admin.deleteCouponGet)


      // .get("/editproducts/:_id",admin.editProductGet)


module.exports=router


