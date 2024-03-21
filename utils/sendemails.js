const nodemailer = require("nodemailer");

const sendEmail = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'juuu5250@gmail.com', // Your Gmail email address
      pass: 'icnv qchj oxvd dpcd', // Your Gmail password
    },
  });

  const mailOptions = {
    from: {
      name: 'juu-cart',
      address: "juuu5250@gmail.com",
    },
    to: email,
    subject: "OTP from juu cart Application",
    text: `Your OTP is ${otp}`,
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("Mail has been sent successfully");
    } catch (error) {
      console.log("Error occurred while sending email:", error);
    }
  };

  sendMail(transporter, mailOptions);
}

module.exports = sendEmail;
