const { koreanproduct } = require("../model/database");
const { planeproduct } = require("../model/database.js");

module.exports = {
  dashboard: (req, res) => {
    res.render("admin/adminHome");
  },
  user: (req, res) => {
    res.render("admin/users");
  },
  product: (req, res) => {
    res.render("admin/products");
  },
  category: (req, res) => {
    res.render("admin/category");
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
