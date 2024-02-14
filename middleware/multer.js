const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,File,cb){
        cb(null,'public/korean_image/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-'+ file.originalname)
    }
})





const koreanupload= multer({storage : storage})
module.exports=koreanupload