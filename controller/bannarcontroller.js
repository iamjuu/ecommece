
const {BannarModel}=require("../model/database")

module.exports={
 
    
  addBannarGet: (req, res) => {
    res.render("admin/addBannar");
  },
  addBannarPost: async (req, res) => {
    try {
      const bannername = req.body.bannername;
      const Amount = req.body.Amount;
      const startingDate = req.body.startingDate;
      const endingDate = req.body.endingDate;
      const bannardata = {
        bannername,
        Amount,
        startingDate,
        endingDate,
      };
      const allbannardata = new BannarModel(bannardata);
      await allbannardata.save();
      console.log(allbannardata);

      res.redirect("/admin/bannar");
    } catch (err) {
      console.log(err, `error in bannar data saving`);
    }
  },
  bannar: async (req, res) => {
    const bannardata = await BannarModel.find({});
    res.render("admin/bannar", { allbannars: bannardata });
  },


}