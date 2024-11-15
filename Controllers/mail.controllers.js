const sendEmail = require('../Libs/Mail')
const sendMail =  async(request,response) =>{
    try{
        sendEmail().then(res =>{
            console.log(res)
        })
        return response.status(200).send({message:"Ok "})
    }catch(err){
        return response.status(500).send({
            message: err.message || "Internal server error"
    })
    }
}

module.exports = {
    sendMail
}