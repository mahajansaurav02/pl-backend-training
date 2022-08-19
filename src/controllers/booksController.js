const booksModel=require('../models/booksModel')
const authorModel=require('../models/authorModel');
const { get } = require('mongoose');


const registerBooks =async function(req,res){
    let data=req.body;
    if (!data.author_id){
        return res.send({condition:"No Author id found",status:false})
    }
    let collectData=await booksModel.create(data)
    res.send({Book:collectData,status:true})
}

const getBookOfC=async function(req,res){
    let firstly=await authorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    // let secondly=await booksModel.find({booksModel:firstly})
    let secondly=await booksModel.find({author_id:firstly["author_id"]})
    res.send({data:secondly,status:true})
} 
const getAuthor=async function (req,res){
    let result=await booksModel.findOne({bookName:"India Positive"}).select({author_id:1,_id:0})
    let nameOfAuthor=await authorModel.find({author_id:result["author_id"]}).select({author_name:1,_id:0})
    let updatedPrice=await booksModel
    .findOneAndUpdate({bookName:"India Positive"},{$set:{price:100}},{new:true}).select({price:1,_id:0})
  
res.send({name:nameOfAuthor,price:updatedPrice})
}
const getLimitedBook=async function(req,res){
    let getId=await booksModel.find({price:{$gte:50,$lte:500}}).select({author_id:1,_id:0})
    let a=getId.map(x=>x.author_id)
    let newrange = await authorModel.find({author_id : a}).select({author_name:1, _id:0});

res.send({data:newrange})

}



module.exports.registerBooks=registerBooks;
module.exports.getBookOfC=getBookOfC
module.exports.getAuthor=getAuthor
module.exports.getLimitedBook=getLimitedBook

// const bookList=async function(req,res){
//     let getBookList= await userModel.find().select({bookName:1,authorName:1,_id:0})
//     res.send({bookList:getBookList, status:true})
// }


// const getBooksinYear=async function(req,res){
//     let data=req.body.year
//     let getyear=await userModel.find({year:{$eq:data}})
//     res.send({years:getyear,status:true})
// }


// const getPerticularBooks=async function(req,res){
//     let input=req.body
//     let getBooks=await userModel.find(input)
//     res.send({data:getBooks,status:true})
// }


// const getXINRBooks=async function(req,res){
//     let getInr= await userModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}}) 
//     // let getInr= await userModel.find({
//     //     $or :[{"price.indianPrice":"100INR"},{"price.indianPrice":"200INR"},{"price.indianPrice":"500INR"}]
//     // }) 
// res.send({data:getInr,status:true})
// }


// const getRandomBooks =async function(req,res){
//     let filterdata=await userModel.find({
//         $or: [{srockAvailable:true},{totalPages:{$gt:500}}]
//     })
//     res.send({data:filterdata,status:true})

// }






// const allBooks=async function(req,res){
//     let listOfBooks= await userModel.find()
//     res.send({list:listOfBooks,status:true})
// }

// module.exports.registerBooks=registerBooks;
// module.exports.getBookOfC=getBookOfC
// module.exports.allBooks=allBooks;
// module.exports.bookList=bookList;
// module.exports.getBooksinYear=getBooksinYear
// module.exports.getPerticularBooks=getPerticularBooks
// module.exports.getXINRBooks=getXINRBooks 
// module.exports.getRandomBooks=getRandomBooks