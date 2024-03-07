const express=require('express')
const app=express()
const path=require('path')
const port= process.env.port||3000
const env=require('dotenv')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
// mongoose.connect('mongodb://127.0.0.1/storeCollections').then(()=>{ console.log('db')})
const connectDatabase=require('./config/DB')

connectDatabase().then(()=>{
  app.listen(port, () => {
  console.log(`database connected at port of ${port}`);
  })
})



const cache=require('nocache')
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


const mainrouter=require('./Routers/mainrouter')
const adminrouter=require('./Routers/adminrouter')
const userrouter=require('./Routers/userrouter')
const productrouter=require('./Routers/productrouter')
const catergoryrouter=require("./Routers/catergoryrouter")
const couponrouter=require("./Routers/couponrouter")
const orderruoter=require("./Routers/orderruoter")
const bannarrouter=require("./Routers/bannarruoter")
const wishlistrouter=require("./Routers/wishlistrouter")




app.use(express.urlencoded({extended:true}))

app.use( session({

      secret: 'mee',
      resave: false,
      saveUninitialized: true,
    })

  )

  app.use(express.static('public'))
  
app.use(bodyParser.json());

  app.use(express.json());
  
app.use('/',adminrouter)
app.use('/',mainrouter)
app.use('/',userrouter)
app.use('/',productrouter)
app.use('/',catergoryrouter)
app.use('/',couponrouter)
app.use("/",orderruoter);
app.use("/",bannarrouter)
app.use("/",wishlistrouter)


