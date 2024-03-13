const { Mongoose } = require("mongoose")
const{cartModel,ProductsModel}=require("../model/database")
const{ ObjectId}= require("mongodb"); 
const mongoose = require('mongoose');



module.exports={

    CartGet:async(req,res)=>{ 
    if(req.session.email){
        const userId= new ObjectId(req.session._id)
        const cart=await  cartModel.findOne({userId}).populate({path:'products.product',model:'Products'})
        console.log(cart);
        res.render("user/cartpage",{cart:cart || ''})
    }else{
       res.redirect('/login');
    }
    

    },
    addtocartpost:async(req,res)=>{
        if(req.session.email){
            const userId=req.session._id
            const productId=req.params.id

            const usersId = new ObjectId(userId);
            const productsId = new ObjectId(productId);


            let carts=await cartModel.findOne({userId:usersId})
            if(!carts){
                 carts=new cartModel({userId:usersId,products:[],totalAmount:0})
            }

            
                const existproduct= carts.products.find((product)=> {
                    return product.product.toString() === productsId.toString();
                })
               const product= await  ProductsModel.findById(productsId)

                if(existproduct){
                    await cartModel.findOneAndUpdate(
                        {
                            "products.product": productsId
                        },
                           {
                                $inc: {
                                    "products.$.quantity": 1
                                }
                            },
                        
                           
            
                        { new: true } // To return the updated document
                    );
                    existproduct.price=product.price*existproduct.quantity;
                    console.log('existproduct.price:',existproduct.price);
                }else{
                    console.log('product not find');
                    carts.products.push({product:productsId,
                        quantity:1,
                        price:product.price
                    })
                }
                     carts.subAmount=carts.products.reduce((total,item)=>{
                        return total+item.price
                     },0)


                     carts.totalAmount=carts.subAmount+20

                    await carts.save()
                    console.log(carts);
       
                            
           
            res.json({success:true})
        }else{
            res.redirect("/login")
        }
    }
    
}