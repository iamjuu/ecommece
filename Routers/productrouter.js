
const express=require('express')
const router=express.Router()
const {productUpload}=require("../middleware/multer")
const product=require("../controller/productcontroller")
const catagory=require("../controller/catergoryController")

  router.get('/admin/addproducts',product.addproductsGet )
        .post("/admin/addproducts",productUpload.array('productImage',10),product.addproductsPost)
        .get('/products',product.products)

        .get("/productdetails/:id",product.productdetailsGet)

        .get("/admin/editproduct/:id",product.editproductGet)
        .post("/admin/editproduct/:id",productUpload.array('productImage',10),product.editproductpost)
        .delete('/productdelete/:id',product.deleteproductsGet)
       
        .get("/catagorypage",catagory.catagoryshowpage)


          module.exports = router