const{categoryModel,ProductsModel}=require("../model/database")


module.exports={
        addCategoryGet: async (req, res) => {
    res.render("admin/addCategory");
  },
     addCategoryPost: async (req, res) => {
    try {
      const Image = req.file.filename;
      const name = req.body.name;

      const data = {
        name,
        Image,
      };
      console.log('sdata',data);
      const categorydata = new categoryModel(data);
      await categorydata.save();
      console.log(categorydata);
      res.redirect("admin/category");
    } catch (error) {
      console.log(error`error in catogory post`);
    }
  },
    category: async (req, res) => {
    const categorydata = await categoryModel.find({});
    res.render("admin/category", { categories: categorydata });
  },

  catagoryshowpage:async(req,res)=>{
   const  id=req.query.category
console.log(id);  
  const check= await  ProductsModel.find({ category:id})
  res.render("user/catagorypage",{check})
}
}