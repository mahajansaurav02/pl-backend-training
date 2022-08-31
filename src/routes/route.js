const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userMiddleware =require("../usermiddleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

// //The userId is sent by front end
router.get("/users/:userId", userMiddleware.authmid, userController.getUserData)

router.put("/users/:userId",userMiddleware.authmid, userController.updateUser)
router.delete("/users/:userId",userMiddleware.authmid, userController.deleteUser)

module.exports = router;