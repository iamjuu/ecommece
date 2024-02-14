const nodemailer = require("nodemailer");



const  sendEmail = (email,otp) => {


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });
  
 
  
  const mailOption = {
    from: {
      name: 'juu-cart',
      address: "juuu5250@gmail.com",
    },
    to:email,
    subject: "OTP from juu cart Application",
    text: `Your OTP is ${otp}`,
  };
  
  const sendMail = async (transporter, mailOption) => {
    try {
      await transporter.sendMail(mailOption);
      console.log("Mail has been sent successfully");
    } catch (error) {
      console.log(Error,`occurred while sending email: ${error}`);
    }
  };
  
  sendMail(transporter, mailOption);

    
}

module.exports= sendEmail ;
