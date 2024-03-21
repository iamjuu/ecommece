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

 const allbannar=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'public/bannarImage')
    },
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+ '-'+ file.originalname)
    }
});


const categoryUpload= multer({storage : category})
const productUpload=multer({storage:allproducts})
const bannarUpload=multer({storage:allbannar})
module.exports={
    categoryUpload,
    productUpload,
    bannarUpload,
}