
const {Product}=require('../model/database')
const {User}=require('../model/database')
const {categoryModel}=require('../model/database')
const {ObjectId} = require('mongodb') //for deteting category //

module.exports = {
  dashboard: (req, res) => {
    res.render("admin/adminHome");
  },
  user:async (req, res) => {
    const USR=await  User.find()
    res.render('admin/users',{users:USR})

  },
  addCategoryGet:async(req,res)=>{
    res.render('admin/addCategory');
  },
  

  addCategoryPost:async(req,res)=>{
    try{
    const name=req.body.name
    const Image = req.file.filename

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
  deleteCategoryGet:async (req, res) => {
    try {
      const categoryId = new ObjectId( req.params.categoryId)
    
        const deleteCategory = await categoryModel.findByIdAndDelete(categoryId) //here delete the product//
    
        res.redirect("/admin/category")
      
    } catch (error) {
      console.log(error)
    }

  },


  addproductsGet:(req,res)=>{

    res.render('admin/addProduct')
  },
  
  product:(req, res) => {
res.render('admin/products')
  },
 
  coupen: (req, res) => {
    res.render("admin/coupon");
  },
  orders: (req, res) => {
    res.render("admin/orders");
  },
  banner:(req,res)=>{
    res.render("admin/bannar")
  },
 

  addproductPost:async(req,res)=>{

  }
};
