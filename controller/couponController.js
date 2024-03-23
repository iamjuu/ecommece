const {CouponModel,cartModel}=require('../model/database')

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
  applycoupon: async (req,res)=>{
    const userId=req.session._id
    const enteredcouponcode=req.body.couponcode
    const coupon = await CouponModel.findOne({couponName:enteredcouponcode})
    const cart = await cartModel.findOne({userId:userId})
    console.log('before cart coupon',cart);
    if(cart){
      const discountprescentage= parseFloat( coupon.couponDiscount)
      console.log('discountprescentage:',discountprescentage);
      const minOrderAmount=coupon.minOrderAmount
      console.log('minOrderAmount:',minOrderAmount);

      const maxOrderAmount=coupon.maxOrderAmount
      console.log('maxOrderAmount:',maxOrderAmount);

      const totalamount = cart.totalAmount
      console.log('totalamount:',totalamount);


      if(cart.totalAmount >= minOrderAmount && cart.totalAmount <= maxOrderAmount){
        cart.totalAmount = totalamount-(totalamount*(discountprescentage/100)).toFixed()
        console.log('totalAmount:',cart.totalAmount);
        cart.save()
        console.log('after cart coupon',cart);
        res.json({
          success:true,
          discount:discountprescentage,
          minOrderAmount:minOrderAmount,
          maxOrderAmount:maxOrderAmount,
          totalamount:totalamount
        })
      }
    }
    }


  }


