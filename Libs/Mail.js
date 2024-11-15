const { createTransport } = require("nodemailer");
require('dotenv').config();


const transport = createTransport({
    service :"gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
        
    }
    
})
console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD);


const sendEmail = ()=>new Promise((resolve,reject)=>{
    transport.sendMail({
        from : process.env.EMAIL,
        to : "Email id",
        subject: 'sample mail',
        text : "Hello "
        
    
    },(err,response)=>{ // error first callback
        if(err){
            reject(err)
        }
        resolve(response)
    })

})
module.exports = sendEmail;
