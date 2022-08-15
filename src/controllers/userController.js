const userModel=require('../models/userModel')

const registerBooks=async function(req,res){
    let data=req.body;
    let collectData=await userModel.create(data)
    res.send({Book:collectData,status:true})
}

const allBooks=async function(req,res){
    let listOfBooks= await userModel.find()
    res.send({list:listOfBooks,status:true})
}

module.exports.registerBooks=registerBooks;
module.exports.allBooks=allBooks