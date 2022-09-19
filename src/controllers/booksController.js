const userModel=require('../models/booksModel')

const registerBooks=async function(req,res){
    let data=req.body;
    let collectData=await userModel.create(data)
    res.send({Book:collectData,status:true})
}


const bookList=async function(req,res){
    let getBookList= await userModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({bookList:getBookList, status:true})
}


const getBooksinYear=async function(req,res){
    let data=req.body.year
    let getyear=await userModel.find({year:{$eq:data}})
    res.send({years:getyear,status:true})
}


const getPerticularBooks=async function(req,res){
    let input=req.body
    let getBooks=await userModel.find(input)
    res.send({data:getBooks,status:true})
}


const getXINRBooks=async function(req,res){
    let getInr= await userModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}}) 
    // let getInr= await userModel.find({
    //     $or :[{"price.indianPrice":"100INR"},{"price.indianPrice":"200INR"},{"price.indianPrice":"500INR"}]
    // }) 
res.send({data:getInr,status:true})
}


const getRandomBooks =async function(req,res){
    let filterdata=await userModel.find({
        $or: [{srockAvailable:true},{totalPages:{$gt:500}}]
    })
    res.send({data:filterdata,status:true})

}






const allBooks=async function(req,res){
    let listOfBooks= await userModel.find()
    res.send({list:listOfBooks,status:true})
}

module.exports.registerBooks=registerBooks;
module.exports.allBooks=allBooks;
module.exports.bookList=bookList;
module.exports.getBooksinYear=getBooksinYear
module.exports.getPerticularBooks=getPerticularBooks
module.exports.getXINRBooks=getXINRBooks 
module.exports.getRandomBooks=getRandomBooks