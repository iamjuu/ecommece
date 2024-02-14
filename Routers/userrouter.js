const express=require('express')
const router=express.Router()

const{userHomeGet,userHomePost}=require('../controller/usercontroller')

router.get('/userhome',userHomeGet)
    .post('/userHome',userHomePost)


    module.exports=router
    