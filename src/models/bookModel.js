const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
		authorId:{
            type:ObjectId,
            ref:'OurAuthor'
        },
	price:Number,
		ratings:Number,
		publisherId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'OurPublisher'
        }
}, { timestamps: true });


module.exports = mongoose.model('OurBooks', bookSchema)
