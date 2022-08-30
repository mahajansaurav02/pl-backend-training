const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser=async function(req,res){
    let data=req.body
    let UserCreate=await userModel.create(data)
    res.send({user:UserCreate,status:true})
}
// =========================================================================================================//
const loginUser=async function(req,res){
    let userId=req.body.emailId
    let userpassword=req.body.password

    let user= await userModel.findOne({emailId:userId,password:userpassword})
    if (!user){
        return res.send({status:false,msg:"emailid or Password is incorrect"})
    }
    let encode= await jwt.sign({userid :user._id.toString(),batch:"plutonium",organisation:"FunctioUp"},'saurav-secret-key')

    res.send({status:true,token:encode})
}

// =========================================================================================================//

const getUserData=async function (req,res){
    let token=req.headers["x-auth-token"]
    if (!token){
        return res.send({status:false,msg:"token is required"})
    }
    let decode= await jwt.verify(token,'saurav-secret-key')
if(!decode){
    return res.send({status:false,msg:"token is invalid"})
}
let userId=req.params.userId
if (decode.userid!=userId){
    res.send({status:false,msg:"User is not valid"})
}
let getUser=await userModel.findById(userId)
if (!getUser){
   return res.send({status:false,msg:"User not found"})
}
res.send({data:getUser,status:true})

}
// =========================================================================================================//

const updateUser= async function(req,res){
    let token= req.headers["x-auth-token"]
if(!token){
    res.send({status:false,msg:"token is unavailable"})
}
let decode= await jwt.verify(token,'saurav-secret-key')

let userId=req.params.userId
if (decode.userid!=userId){
    res.send({status:false,msg:"User is not valid"})
}
let userdata=req.body
let update=await userModel.findByIdAndUpdate({_id:userId},userdata,{new:true})
if(!update){
    res.send({status:false,msg:"user not found"})
}
res.send({status:true,data:update})

}
// =========================================================================================================//

const deleteUser=async function(req,res){
    let token= req.headers["x-auth-token"]
if(!token){
    return res.send({status:false,msg:"token is unavailable"})
}
let decode= await jwt.verify(token,'saurav-secret-key')

let userid=req.params.userId
if (decode.userid!=userid){
    res.send({status:false,msg:"User is not valid"})
}
let user= await userModel.findOneAndUpdate({_id:userid},{$set:{isDeleted:true}},{new:true})
if (!user){
    return res.send({status:false,msg:"User not found"})
}
res.send({status:true,data:user})
}

module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser
