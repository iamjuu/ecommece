const multer=require('multer')

const product=multer.diskStorage({
    destination:function(req,File,cb){
        cb(null,'public/products/mens wear/korean_image');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-'+ file.originalname)
    }
})

const category=multer.diskStorage({
    destination:function(req,File,cb){
        cb(null,'public/category-images');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-'+ file.originalname)
    }
})





const productUpload= multer({storage : product})
const categoryUpload= multer({storage : category})
module.exports={
    productUpload,
    categoryUpload
}