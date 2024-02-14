const session=require('express-session')
const {User}=require('../model/database')
const nodemailer=require('nodemailer')
const { text } = require('body-parser');




module.exports={
    signupGet:(req,res)=>{
    if(req.session.email){
        res.redirect('/userHome')
    }else{
        res.render('signup')
    }

},


signupPost:async(req,res)=>{
    const {Username,
       email,
       phone,
       password,
       confirmpassword
     }=req.body

     const data={
        name:Username,
        email:email,
        phone:phone,
        password:password,
     }

    const newuser=await User.create(data)
    console.log(newuser);

        const defaultRole='User'
        req.session.role=defaultRole

        console.log('mail creating ');
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
            console.log('mail sending');
    const otp=otpgenerator()

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
            console.log(`this is otp${otp}`);
            
        }catch(err){
            console.log(err)
        }
    }
    sendMail(transporter,mailOption)
    res.redirect('/otp')
},
        otpGet:async(req,res)=>{
            res.render('otp')
            // const phone = req.session.phone
            console.log('phone',phone);


 

        },
        otppost:(req,res)=>{
            const otp=req.body
            // const phone=req.session.phone

        },
    
    loginGet:(req,res)=>{
        if(req.session.email){
            return res.redirect('/userHome')
            }
            else{
                res.render("login")
            }
    },

    loginPost: async (req, res) => {
        const email = req.body.email;
        console.log(email);

    
        try {
            const usr = await User.findOne({ email: email });
            console.log(usr);

    
            if (usr) {
          
                if (usr.role) {
                    req.session.role = usr.role;
                    res.redirect('/adminHome');
                } else {
                    req.session.email = usr.email;
                    res.redirect('/userHome');
                }
            } else {
  
                res.render('login', { error: 'User not found' });
            }
        } catch (error) {
            


            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
    

    logoutGet:(req,res)=>{
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/login');
         })   

    }

}

