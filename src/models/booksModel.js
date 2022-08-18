const mongoose=require('mongoose');
const UpdateBooksSchema =new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
    },
    author_id:Number,
    price:Number,
    rating:Number

},{timestamps:true});
module.exports=mongoose.model('UpdateBook',UpdateBooksSchema)