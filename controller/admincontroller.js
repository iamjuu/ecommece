const{koreanproduct} =require('../model/database')
const {planeproduct}=require('../model/database.js')

module.exports={
    adminhomeGet:async(req,res)=>{
        if(req.session.role===true){
            const planeproducts=await planeproduct.find()
            const koreanproducts=await koreanproduct.find()
            res.render('adminHome',{koreanproducts,planeproducts})
        }else{
            res.redirect('/login')
        }


    }, 
     adminhomePost:(req,res)=>{

    },



    addproductGet:(req,res)=>{
        if(req.session.role){
            res.render('addProduct')
        }else{
          res.redirect('/login')
        }
    },
    addproductPost:async(req,res)=>{
            const {name,
                price,
                description}=req.body
                const imageurl=req.file.filename


                const newproduct= new koreanproduct({
                    imageurl,
                    name,
                    price,
                    description,
                })
                await newproduct.save()
                res.redirect('/adminHome')

    }
}