
const { render } = require('ejs');
const {User}=require('../model/database')
const {categoryModel}=require('../model/database')
const {ProductsModel}=require('../model/database')
const {CouponModel}=require("../model/database")
const {ObjectId} = require('mongodb') //for deteting category //

module.exports = {
  dashboard: (req, res) => {
    res.render("admin/adminHome");
  },
  user:async (req, res) => {
    const USR=await  User.find()
    res.render('admin/users',{users:USR})

  },
  
  addproductsGet:(req,res)=>{
    res.render('admin/addproducts')
  },

  addproductsPost:async(req,res)=>{
    try{
      console.log(req.body)
      console.log(req.files);
      const  Image=req.files[0].filename
      const productName=req.body.productName
      const price=req.body.price //set
      const category=req.body.category
      const quantity=req.body.quantity //set    
console.log(Image);

    const prodata= {
        Image,
        productName:productName,
        price,
        category,
        quantity,


    }
    console.log(prodata)
const allproductsdata= new ProductsModel(prodata)
await allproductsdata.save()
console.log('allproductsdata:',allproductsdata);
res.redirect('/admin/products');
}catch(err){
  console.log(err,`something errr`);
  res.status(500).send('Internal Server Error');
}

  },


  products:async(req, res) => {
const Productsdata= await ProductsModel.find({});
res.render('admin/products',{allProducts:Productsdata});
  },



  addCategoryGet:async(req,res)=>{
    res.render('admin/addCategory');
  },
  addCategoryPost:async(req,res)=>{
    try{
      const Image = req.file.filename
    const name=req.body.name

      const data ={
        name,
        Image
      }
    const categorydata =new categoryModel(data);
    await categorydata.save();
    console.log(categorydata);
    res.redirect('/admin/category')

    }

     catch(error) {
      console.log(error)
    }

  },
  category:async(req, res) => {
    const categorydata=await categoryModel.find({})

    res.render("admin/category",{categories:categorydata});
  },

  addcoupenGet:(req,res)=>{
    res.render('admin/addCoupon');
      },
      addcouponPost:async(req,res)=>{
        console.log("here");
        try{
          const couponName=req.body.couponName
          const couponDiscount=req.body.couponDiscount
          const minOrderAmount=req.body.minOrderAmount
          const maxOrderAmount=req.body.maxOrderAmount
          const startingDate=req.body.startingDate
          const endingDate = req.body.endingDate; // Corrected variable name here


            const data={
              couponName,
              couponDiscount,
              minOrderAmount,
              maxOrderAmount,
              startingDate,
              endingDate,
           
            }
            const coupondata= new  CouponModel(data);
            await coupondata.save()

              console.log(`data is here`,coupondata)
              res.redirect("/admin/coupon",)




        }catch(err){
          console.log(err,`addcoupon err`);
        }

      },
      coupon:async (req, res) => {

      const coupondata= await CouponModel.find({})
        res.render("admin/coupon",{allcoupons:coupondata});
      },
  

  


  deleteCategoryGet:async (req, res) => {
    try {
      const categoryId = new ObjectId( req.params.categoryId)
    
        const deleteCategory = await categoryModel.findByIdAndDelete(categoryId) //here delete the product//
    
        res.redirect("/admin/category")
      
    } catch (error) {
      console.log(error)
    }

  },
  editCategoryGet:(req,res)=>{

    render('admin/editproducts')

  },

  orders: (req, res) => {
    res.render("admin/orders");
  },
  banner:(req,res)=>{
    res.render("admin/bannar")
  },
 

 
};
