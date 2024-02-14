const express=require('express')
const app=express()
const path=require('path')
const port= process.env.port||3000
const env=require('dotenv')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1/storeCollections').then(()=>{ console.log('db')})

const cache=require('nocache')
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));






const mainrouter=require('./Routers/mainrouter')
const adminrouter=require('./Routers/adminrouter')
const userrouter=require('./Routers/userrouter')







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






app.listen(port,()=>{
    console.log('running');
})



