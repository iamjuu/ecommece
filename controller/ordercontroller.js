module.exports={

  orderadmin:(req,res)=>{
    res.render("admin/orders")
  },

  orderuser:(req,res)=>{
    res.render("user")
  },
  orderplaced:(req,res)=>{
    if (req.session.email) {
      res.render("user/orderplaced")
      
    }
  }
}