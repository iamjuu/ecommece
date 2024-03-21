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

          const allproductsdata = new ProductsModel(prodata);
          await allproductsdata.save();
    
    
          res.redirect("/products");
        } catch (err) {
          console.log(err, `error in add product post`);
          res.status(500).send("Internal Server Error");
        }
      },
    
      products: async (req, res) => {
        const Productsdata = await ProductsModel.find({});
        res.render("admin/products", { allProducts: Productsdata });
        // console.log(Productsdata)
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
          // console.log(productId);
          res.status(200).json({message:true})
          await ProductsModel.findByIdAndDelete(productId); 
        } catch (err) {
          console.log(err, `product delete erorr`);
        }
},
editproductGet:async (req,res)=>{

  const productid=req.params.id
  console.log('product id',productid);

  const product= await ProductsModel.findById(productid);
  console.log('product details',product);
  res.render("admin/editproducts",{product});


},
editproductpost:async(req,res)=>{

  const productid=req.params.id
  console.log(productid);

  const oldImage=await ProductsModel.findOne({_id:productid})
  const {productName,price,discount,category,quantity,description} = req.body;
  await ProductsModel.findByIdAndUpdate(productid, {
      $set: {
          productName: productName,
          price:price,
          discount: discount,
          category:category,
          quantity:quantity,
          description:description,
      }
    });      
  res.redirect("/admin/addproducts") 
},

}