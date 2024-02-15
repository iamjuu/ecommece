// const { koreanproduct } = require("../model/database");
// const { planeproduct } = require("../model/database.js");
const {Product}=require('../model/database')
const {User}=require('../model/database')
module.exports = {
  dashboard: (req, res) => {
    res.render("admin/adminHome");
  },
  user:async (req, res) => {
    const USR=await  User.find()
    res.render('admin/users',{users:USR})

  },
  category: (req, res) => {
    res.render("admin/category");
  },
  addCategoryGet:(req,res)=>{
    res.render('admin/addCategory');
  },
  addCategoryPost:async(req,res)=>{
//     try{
// cosnt {}=req.body
//     }

  },
  
  product: (req, res) => {
    res.render("admin/products");
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
  addproductGet:(req,res)=>{
    res.render('admin/addProduct')
  },
  addproductPost:(req,res)=>{

  }
};
