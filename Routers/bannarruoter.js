const express=require('express')
const router=express.Router()


const {addBannarGet,addBannarPost,bannar}=require('../controller/bannarcontroller')

router.get("/addBannarGet",addBannarGet)
        .post("/addBannarPost",addBannarPost)
        .get("/bannar",bannar)

        module.exports=router