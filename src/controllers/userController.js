const UserModel= require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body
    let user=req.headers.isfreeappuser
    data.isFreeAppUser=user

    let userData=await UserModel.create(data)
    res.send({msg:userData})
}


module.exports.createUser= createUser
