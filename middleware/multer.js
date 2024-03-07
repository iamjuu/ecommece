const multer=require('multer')

const category=multer.diskStorage({
    destination:function(req,File,cb){
        cb(null,'public/category-images');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-'+ file.originalname)
    }
})



const allproducts=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'public/productImages')
    },
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+ '-'+ file.originalname)
    }
 })

 const allbannars=multer.diskStorage({
    destination(req,file,cb)
    {
        cb(null,'public/bannarimage')
    },
    filename:function(req,file,cb)
{
    cb(null,Date.now()+ '-'+file.originalname)
}
   
 })

const categoryUpload= multer({storage : category})
const productUpload=multer({storage:allproducts})
const bannarupload=multer({storage:allbannars})
module.exports={
    categoryUpload,
    productUpload,
    bannarupload,
}