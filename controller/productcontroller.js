// user products 

const {  ProductsModel } = require("../model/database");

module.exports={
  



      addproductsGet: (req, res) => {
        res.render("admin/addproducts");
      },
    
      addproductsPost: async (req, res) => {
        try {
          const{productName,price,category,quantity,description,discount}=req.body
          const image=req.files.map(file => '/productImages'+file.filename)
    
          const prodata = {
            Image:image,
            productName,
            price,
            category,
            quantity,
            description,
            discount,
          };
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
      },


      productdetailsGet: async (req, res) => {
        const productId = req.params.id;
        const product = await ProductsModel.findById(productId);
        const { price, discount } = product;
    
        const discountrate = (price * discount) / 100;
        res.render("user/productdetails", { product, discountrate });
      },

}