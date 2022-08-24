const publisherModel=require('../models/publisherModel')

const createPublisher= async function(req,res){
    let data=req.body
    let savePublisher= await publisherModel.create(data)
    res.send({newPublisher:savePublisher})
}


module.exports.createPublisher=createPublisher