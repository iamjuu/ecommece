
const express=require('express')
const router=express.Router()
const {productUpload}=require("../middleware/multer")
const {addproductsGet,addproductsPost,products}=require("../controller/productcontroller")
const {productdetailsGet,deleteproductsGet,editproductGet}=require("../controller/productcontroller")



  router.get('/admin/addproducts',addproductsGet )
        .post("/admin/addproducts",productUpload.array('productImage',5),addproductsPost)
        .get('/products',products)
        .get("/productdetails/:id",productdetailsGet)
        .delete('/productdelete/:id',deleteproductsGet)
        .get("/admin/editproduc/:id",editproductGet)
       
       
        module.exports = router;