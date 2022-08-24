const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require('../models/publisherModel')


const createBook = async function (req, res) {
    let book = req.body
    let authorid = await authorModel.findById(book.authorId)
    let publisherid = await publisherModel.findById(book.publisherId)

    if (!book.authorId || !book.publisherId) {

        return res.send({ warning: "This details is required" })
    }
    else if (authorid == null) {

        return res.send({ warning: "Please enter a valid authorId " })

    } else if (publisherid == null) {
        return res.send({ warning: "Please enter a valid publisherId " })
    }
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}


const getPopulateBooks = async function (req, res) {
    // let pbname=publisherId.name
    let getBook = await bookModel.find().populate(['authorId', 'publisherId'])
    res.send({ data: getBook })
}



const getUpdatesOfBook = async function (req, res) {
    let updatePublisher = await publisherModel.updateMany({ name: { $in: ["Penguin", "HarperCollins"] } }, { $set: { isHardCover: true } })
    let updateprice = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let result = await bookModel.updateMany({ authorId: { $in: updateprice } }, { $inc: { price: 10 } })
    let updateBoo = await bookModel.find().populate(['authorId', 'publisherId'])

    res.send({ data: updateBoo })
}
module.exports.createBook = createBook
module.exports.getPopulateBooks = getPopulateBooks
module.exports.getUpdatesOfBook = getUpdatesOfBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
