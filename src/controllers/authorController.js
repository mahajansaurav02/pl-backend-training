// const { model } = require('mongoose')
const authorModel=require('../models/authorModel')
const userModel=require('../models/booksModel')


let createAuthor=async function(req,res){
    let authorData=req.body
    let getAuthordata=await authorModel.create(authorData)
    res.send({author:getAuthordata,status:true})}

    const practice=async function(req,res){
        let result=await authorModel.findOneAndUpdate(
            {author_name:"S S mahajan"},
            {$set:{age:50}},
            {new:true,upsert:true}
            )
            res.send({data:result},)
    }





module.exports.createAuthor=createAuthor
module.exports.practice=practice