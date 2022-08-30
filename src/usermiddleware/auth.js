let jwt= require("jsonwebtoken")
let userModel=require("../models/userModel")

const authmid= async function(req,res,next){
        let token= req.headers["x-auth-token"]
       let userId=req.params.userId
        if (!token){
            return res.send({status:false,msg:"token must be present "})
        }
let decode= await jwt.verify(token,'saurav-secret-key')
if (!decode){
    return res.send({status:false,msg:"token is not valid"})
}
if (decode.userid!=userId){
    res.send({status:false,msg:" Invalid user found"})
}


next()
}