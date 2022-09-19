const mongoose=require('mongoose');
const booksSchema =new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
    },
    price:{
        indianPrice:String,
        europianPrice:String
    },
    year:{
        type:Number,
        default:2021
    },
    authorName:String,
    tags:["sadhana","deepstambh","laksh","garudjhep",""],
    totalPages:Number,
    srockAvailable:Boolean


},{timestamps:true});
module.exports=mongoose.model('Book',booksSchema)