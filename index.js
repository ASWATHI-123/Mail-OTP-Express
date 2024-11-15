const express = require("express");
const env = require("dotenv");
const mailRoute = require("./Routes/mail.route")

env.config()
const app = express();
app.use("/sendMail", mailRoute);
app.listen(process.env.PORT || 8080,(err)=>{
    if (err){
        return process.exit()
    }
    console.log("The PORT iS running...");
})


