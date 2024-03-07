const express=require('express')
const router=express.Router()

const {addCategoryGet,addCategoryPost,category}=require("../controller/catergoryController")

router.get("/admin/addcatergory",addCategoryGet)
        .post("/admin/addCategoryPost",addCategoryPost)
        .get("/catergory",category)


        module.exports = router;
