const express = require('express');
const router = express.Router();
// const = require("../models/userModel.js")
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createProduct", ProductController.createProduct  )




router.post("/createUser",commonMW.mid1,UserController.createUser)
router.post("/createOrder",commonMW.mid1,orderController.createOrder)





module.exports = router;