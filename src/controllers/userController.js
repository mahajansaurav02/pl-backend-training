const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    try {
        let data = req.body
    let UserCreate = await userModel.create(data)
    res.status(201).send({ user: UserCreate, status: true })
    } catch (error) {
        res.status(500).send({ status: false, msg:error.message})
    }
}
// =========================================================================================================//
const loginUser = async function (req, res) {
    try {
        let userId = req.body.emailId
    let userpassword = req.body.password
    let user = await userModel.findOne({ emailId: userId, password: userpassword })
    if (!user) {
        return res.status(404).send({ status: false, msg: "emailid or Password is incorrect" })
    }
    let encode = await jwt.sign({ userid: user._id.toString(), batch: "plutonium", organisation: "FunctioUp" }, 'saurav-secret-key')
    res.status(404).send({ status: true, token: encode })
    } catch (error) {
        res.status(500).send({ status: false, msg:error.message})
    }
}
// =========================================================================================================//

const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId
        let getUser = await userModel.findById(userId)
        if (!getUser) {
            return res.status(404).send({ status: false, msg: "User not found" })
        }
        res.status(201).send({ data: getUser, status: true })
    
    } catch (error) {
        res.status(500).send({ status: false, msg:error.message})

    }
}
// =========================================================================================================//

const updateUser = async function (req, res) {
   try {
    let userId = req.param.userId
    let userdata = req.body
    let update = await userModel.findByIdAndUpdate({ _id: userId }, userdata, { new: true })
    if (!update) {
        res.status(404).send({ status: false, msg: "user not found" })
    }
    res.status(201).send({ status: true, data: update })
   } catch (error) {
    res.status(500).send({ status: false,msg:error.message })
   } 

}
// =========================================================================================================//

const deleteUser = async function (req, res) {
try {
    let userid = req.params.userId

    let user = await userModel.findOneAndUpdate({ _id: userid }, { $set: { isDeleted: true } }, { new: true })
    if (!user) {
        return res.status(404).send({ status: false, msg: "User not found" })
    }
    res.status(201).send({ status: true, data: user })
} catch (error) {
    res.status(500).send({ status: false, msg:error.message})
}
    
}

module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
