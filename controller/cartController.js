const { Mongoose } = require("mongoose")
const{cartModel,ProductsModel}=require("../model/database")
const{ ObjectId}= require("mongodb"); 
const mongoose = require('mongoose');
const session = require("express-session");



module.exports={

    CartGet:async(req,res)=>{ 
    if(req.session.email){
        const userId= new ObjectId(req.session._id)
        const cart=await  cartModel.findOne({userId}).populate({path:'products.product',model:'Products'})
        const subtotal=cart.products.reduce((acc,value)=>{
            return  acc+=value.product.price*value.quantity               
        },0)
        console.log(subtotal);
        const discount=cart.products.reduce((acc,value)=>{
            return acc +=(value.product.price*value.product.discount)/100;               
        },0)

        const  total=(subtotal - discount)
        // console.log('Cart Get : ',cart);
        res.render("user/cartpage",{cart:cart || '',subTotal:subtotal, discount:discount,total:total});
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
                    carts.subAmount = carts.products.reduce((total, product) => total + (product.price * product.quantity), 0)

                    carts.totalAmount=carts.subAmount+20

                    await carts.save()
                    // console.log(carts);
       
                            
           
            res.json({success:true})
        }else{
            res.redirect("/login")
        }
    },
    productdelete:(req,res)=>{
        const productId=req.params.id
            console.log(productId);
    },
    cartupdate:async (req,res)=>{
    const objId= req.query.id
    console.log(objId);
    const value = req.query.value
    console.log(value);
    const userId=req.session._id
    // console.log('userID',userId);
    //   console.log('objid',objId);

      try {

        const newdata = await cartModel.findOneAndUpdate(
            {
                'products._id': objId
            },      
            
            {

                'products.$.quantity': value,
                                
            },
            {new: true}
        );

        
        console.log('Updated document:', newdata);

        res.status(200).json({success:true})
    } catch (error) {
        res.status(400).json({success:false})
        console.error('Error:', error);

    }
    },
    }


