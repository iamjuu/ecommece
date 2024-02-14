
const express=require('express')
const router=express.Router()

const koreansproduct=require('../middleware/multer')


const {
        adminhomeGet,
        adminhomePost,
        addproductGet,
        addproductPost}=require('../controller/admincontroller')


router.get('/adminHome',adminhomeGet)
      .post('/adminHome',adminhomePost)
      .get('/addproduct',addproductGet)
     .post('/addProduct',koreansproduct.single('image'),addproductPost)



     

    module.exports=router