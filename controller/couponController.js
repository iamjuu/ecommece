const {CouponModel}=require('../model/database')

module.exports={

        coupon: async (req, res) => {
          const coupondata = await CouponModel.find({});
          res.render("admin/coupon", { allcoupons: coupondata });
        },

          addcoupenGet: (req, res) => {
    res.render("admin/addCoupon");
  },
  addcouponPost: async (req, res) => {
    try {
      await CouponModel.create(req.body);
      res.redirect("/admin/coupon");
    } catch (err) {
      console.log(err, `addcoupon err`);
    }
  },
}
