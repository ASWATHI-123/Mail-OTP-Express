const { Router } = require("express");
const { sendMail }=require("../Controllers/mail.controllers");

const mailRoute = Router();

mailRoute.post("/",sendMail)

module.exports = mailRoute;