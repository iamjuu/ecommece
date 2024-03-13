// user products 

const {  ProductsModel } = require("../model/database");

module.exports={
  



      addproductsGet: (req, res) => {
        res.render("admin/addproducts");
      },
    
      addproductsPost: async (req, res) => {
        try {
          const{productName,price,category,quantity,description,discount}=req.body
          const image=req.files.map(file => file.filename)
    
          const prodata = {
            Image:image,
            productName,
            price,
            category,
            quantity,
            description,
            discount,
          };

          console.log(prodata);
          const allproductsdata = new ProductsModel(prodata);
          await allproductsdata.save();
    
    
          res.redirect("/products");
        } catch (err) {
          console.log(err, `error in add product`);
          res.status(500).send("Internal Server Error");
        }
      },
    
      products: async (req, res) => {
        const Productsdata = await ProductsModel.find({});
        res.render("admin/products", { allProducts: Productsdata });
        console.log(Productsdata)
      },


      productdetailsGet: async (req, res) => {
        const productId = req.params.id;
        const product = await ProductsModel.findById(productId);
        const { price, discount } = product;
    
        const discountrate = (price * discount) / 100;
        res.render("user/productdetails", { product, discountrate });
      },
      deleteproductsGet: async (req, res) => {
        try {
          const productId =req.params.id
          console.log(productId);
          res.status(200).json({message:true})
          await ProductsModel.findByIdAndDelete(productId); 
        } catch (err) {
          console.log(err, `product delete erorr`);
        }
},
editproductGet:(req,res)=>{
  res.render("admin/editproduct")
}
}