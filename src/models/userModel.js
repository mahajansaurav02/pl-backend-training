const mongoose=require('mongoose');
const booksSchema =new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true
    },
    authorName:String,
    publisherOfBook:{
        type:String,
        required:true,
        enum:["sadhana","deepstambh","laksh","garudjhep",""]
    },
    category:String,
    year:Number


},{timestamps:true});
module.exports=mongoose.model('Book',booksSchema)