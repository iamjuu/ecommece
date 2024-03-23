const express = require("express");
const router = express.Router();
const admin = require("../controller/admincontroller");
const banner = require("../controller/bannarcontroller");
const coupon = require("../controller/couponController");
const category = require("../controller/catergoryController");
const orders=require("../controller/ordercontroller")

const {bannarUpload}=require('../middleware/multer')

router
  .get("/dashboard", admin.dashboard)

  .get("/admin/addBannar", banner.addBannarGet)
  .post("/admin/addBannar",bannarUpload.array('bannarimage',5),banner.addBannarPost)


  .get("/bannar", banner.bannar)


  .delete("/bannar/delete/delete:id",banner.deleteBannar)




  .get("/coupon", coupon.coupon)
  .get("/addcoupenGet", coupon.addcoupenGet)
  .post("/addcouponPost", coupon.addcouponPost)

  .get("/admin/addcatergory", category.addCategoryGet)
  .post("/admin/addCategoryPost", category.addCategoryPost)
  .get("/catergory", category.category);



  router.get("/orders",orders.orderadmin)



module.exports = router;
