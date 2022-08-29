const { count } = require("console");
const orderModel = require("../models/orderModel");
const productrModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
  let data = req.body;
  let head = req.headers.isfreeappuser;
  let userid = req.body.userId;
  let procuctid = req.body.productId;
  data.isFreeAppUser = head;

  let user = await userModel.findById({ $in: [userid] }).select({ isFreeAppUser: 1, balance: 1, _id: 1 });
  let product = await productrModel.findById({ $in: [procuctid] }).select({ _id: 1, price: 1 });
  if (user == null) {
    return res.send("userId is Invalid");
  } else if (product == null) {
    return res.send("productId is Invalid");
  }
  if (user["isFreeAppUser"] == true) {
    let savedData = await orderModel.create(data);
    res.send({ data: savedData });
  }
  let value = user["balance"] - product["price"];
  if (user["isFreeAppUser"] == false) {
    data["amount"] = product["price"];
    if (product["price"] < user["balance"]) {
      let deduct = await userModel
        .find({ $in: [userid] })
        .updateOne({ _id: { $in: userid } }, { $set: { balance: value } });
      let savedData = await orderModel.create(data);
      res.send({ data: savedData });
    } else {
      return res.send("balance Low");
    }
  }
};

module.exports.createOrder = createOrder;
