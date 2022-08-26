const { count } = require("console")
const orderModel= require("../models/orderModel")
const productrModel= require("../models/productModel")
const userModel= require("../models/userModel")

const createOrder= async function (req, res) {
    let data=req.body
    let head=req.headers.isfreeappuser
    let userid=req.body.userId
    let procuctid=req.body.productId
    data.isFreeAppUser=head

   let user= await userModel.findById({$in:[userid]}).select({isFreeAppUser:1,balance:1,_id:1})
   let product=await productrModel.findById({$in:[procuctid]}).select({_id:1,price:1})
if (user==null){
    res.send("userId is Invalid")
}else if(product==null){
    res.send("productId is Invalid")
}
if(user["isFreeAppUser"]==true){
    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}

if(user["isFreeAppUser"]==false){
    if(product["price"]<user["balance"]){
        user["balance"]-product["price"]
        let savedData= await orderModel.create(data)
    res.send({data: savedData})
    }else{
        res.send("balance Low")
    }
}

    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}

module.exports.createOrder= createOrder
