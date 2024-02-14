const { text } = require('body-parser');
const nodemailer=require('nodemailer')
// const email=require("./controller/maincontroller")
const path = require('path');
const User = require("./model/database");
const email="muhammedajmalcc6424094@gmail.com";

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "juuu5250@gmail.com",
      pass: "jnzz zqdm hpjc krts",
    },
  });
  


const otpgenerator=()=>{
    let randomNumber=Math.floor(1000 + Math.random() * (9999 - 1000));
    return randomNumber
}

const otp=otpgenerator()

console.log(otp)
const mailOption={
    from:"juuu5250@gmail.com",
    to:email,
    subject:"verification mail",
    text:`your otp number is ${otp}`
}


const sendMail=async (transporter,mailOption)=>{
    try{
        await transporter.sendMail(mailOption);
        console.log("email sent");
    }catch(err){
        console.log(err)
    }
}
sendMail(transporter,mailOption)
