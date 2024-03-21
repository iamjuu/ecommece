
// const {BannarModel}=require("../model/database")
const {BannarModel}=require("../model/database")

module.exports={
 
    
  addBannarGet: (req, res) => {

    res.render("admin/addBannar");
  },

  addBannarPost: async (req, res) => {
try {
const {bannername,Amount,startingDate,endingDate}=req.body  
console.log(bannername,Amount,startingDate,endingDate);



const image=req.files.map(file => file.filename)

const data = {
  bannername,Amount,startingDate,endingDate
};

const allBannardata = new BannarModel(data);
await allBannardata.save();
console.log(allBannardata);

} catch (error) {
  console.log(error,'error in bannar post');
  
}  
res.redirect("/bannar");

  },
  

  bannar: async (req, res) => {
   
    res.render("admin/bannar");
  },
  deleteBannar:(req,res)=>{
    
    const bannarId =req.params.id
    console.log(bannarId);
  }


}