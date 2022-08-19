const express = require('express');
const router = express.Router();
const UserModel= require("../models/booksModel.js")
const authorModel= require("../models/authorModel")
const BooksController= require("../controllers/booksController")
const authorController=require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post('/registerBooks',BooksController.registerBooks);
router.post('/createAuthor',authorController.createAuthor)
router.get('/getBookOfC',BooksController.getBookOfC)
router.get('/getAuthor',BooksController.getAuthor)
router.get('/getLimitedBook',BooksController.getLimitedBook)
router.get('/practice',authorController.practice)




module.exports = router;