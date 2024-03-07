const { render } = require("ejs");
const { categoryModel } = require("../model/database");
const { ProductsModel } = require("../model/database");
const { CouponModel } = require("../model/database");
const { BannarModel } = require("../model/database");
const { ObjectId } = require("mongodb"); //for deteting category //

module.exports = {
  dashboard: (req, res) => {
    res.render("admin/adminHome");
  },


















  



  // deleteproductsGet: async (req, res) => {
  //   try {
  //     const productId = new ObjectId(req.params._id);
  //     console.log(productId);
  //     res.status(200).json({message:"deleted successfully"})
  //     await ProductsModel.findByIdAndDelete(productId); 
  //   } catch (err) {
  //     console.log(err, `product delete erorr`);
  //   }
  // },
  // deleteCategoryGet: async (req, res) => {
  //   try {
  //     const categoryId = new ObjectId(req.params.categoryId)

  //     const deleteCategory = await categoryModel.findByIdAndDelete(categoryId); //here delete the product//

  //     res.redirect("/admin/category");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // deleteCouponGet: async (req, res) => {
  //   try {
  //     const couponId = new ObjectId(req.params.couponId);
  //     console.log(couponId);
  //     const deletecoupon = await CouponModel.findByIdAndDelete(couponId);
  //     res.redirect("/admin/coupon");
  //   } catch (err) {
  //     console.log(err, `err in deleting coupon `);
  //   }
  // },
  // deletebannarGet: async (req, res) => {
  //   try {
  //     const bannarId = new ObjectId(req.params.bannarId);
  //     console.log(bannarId);
  //     const bannardelete = await BannarModel.findByIdAndDelete(bannarId);
  //     console.log(bannardelete);
  //     res.redirect("/admin/bannar");
  //   } catch (err) {
  //     console.log(err, `error in the deleting bannar`);
  //   }
  // },

  // editProductGet: async(req, res) => {
   
  //   const Id=req.params._id
  //   const showproduct=await ProductsModel.findById(Id)
    

  //   res.render("admin/editproducts",{showproduct});
  // },
  // editproductPost: async(req, res) => {
   
  // },
};
