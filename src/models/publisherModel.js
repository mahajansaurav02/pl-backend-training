const mongoose=require('mongoose')



const publisherSchema= new mongoose.Schema({
    name:String,
    headQuarter:String,
    isHardCover:Boolean
    

},{timestamps:true})


module.exports= mongoose.model('OurPublisher',publisherSchema)