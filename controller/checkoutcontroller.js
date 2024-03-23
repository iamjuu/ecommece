
const{User,addressmodel,cartModel, ordermodel}=require('../model/database')

module.exports={
checkoutGet:async(req,res)=>{
    try {
        if(req.session.email){
            const userId = req.session._id
            const userCart= await cartModel.findOne({userId:userId}).populate( {
                path:"products.product",
                model:'Products'
            })
            if (userCart) {
                const userAddresses= await addressmodel.find({userId})
                res.render("user/checkout", {
                    cart: userCart,
                    userAddresses: userAddresses,
                  });
             } else {
                
            }
        }else{
            res.redirect('/login')
        }
        } catch (error) {
            console.log(error,'errer in checkout page get');
            
        }
   
},

checkoutPost: async (req, res) => {
  if(req.session.email){
    try {
        
        
        const userId= req.session._id
    const email=req.body.email

   if(email!==req.session.email){
    return res.send(
        "<script>alert('The email you entered does not match the logged-in user.') window.location.href = '/checkout';</script>" );
   }
           // Find the user's addresses based on the user ID
           const userAddresses = await addressmodel.findOne({userId:userId})
           const selectedAddressId = req.body.selectedAddress;
              // Find the selected address from the user's addresses
              const selectedAddress = userAddresses.addresses.find(
                (address) => address._id.toString() === selectedAddressId
              )
              const userDeliveryAddress = {
                houseNumber: selectedAddress.houseNumber,
                locality: selectedAddress.locality,
                city: selectedAddress.city,
                state: selectedAddress.state,
                pinCode: selectedAddress.pinCode,
              }
                  // Find the user's cart with populated product details
        const userCart = await cartModel.findOne({ userId: userId }).populate({
            path: "products.product",
            model: "Products",
          })
             // Get the current date and set the delivery date
        const orderedDate = Date.now();
        const deliveryDate = new Date(orderedDate);
        deliveryDate.setDate(deliveryDate.getDate() + 2);
        let orderStatus = "Pending";
        const paymentMethod = req.body.paymentMethod
          // Set an extra charge for Cash On Delivery payment method
          let extraCharge = 0;
          if (paymentMethod === "Cash On Delivery") {
              extraCharge = 20;
          }
          const userOrder = new ordermodel({
            user: userId,
            products: userCart.products.map((cartItem) => ({
                product: cartItem.product._id,
                quantity: cartItem.quantity,
            })),
            totalOrderAmount: userCart.totalAmount + extraCharge,
            deliveryAddress: userDeliveryAddress,
            orderedDate: orderedDate,
            deliveryDate: deliveryDate,
            orderStatus: orderStatus,
            paymentMethod: paymentMethod,
        });
        // Save the order to the database
        await userOrder.save();
        console.log(userOrder);
        res.redirect(`/orderplaced?orderId=${userOrder._id}`);
        
    } catch (error) {
        console.error("Error in checkoutPost:", error);
    }
  }
}
    }
