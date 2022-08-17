const express = require('express');
const router = express.Router();
const UserModel= require("../models/booksModel.js")
const BooksController= require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post('/registerBooks',BooksController.registerBooks);
router.get('/allBooks',BooksController.allBooks);
router.get('/bookList',BooksController.bookList)
router.post('/getBooksinYear',BooksController.getBooksinYear)
router.get('/getPerticularBooks',BooksController.getPerticularBooks)
router.get('/getXINRBooks',BooksController.getXINRBooks)
router.get('/getRandomBooks',BooksController.getRandomBooks)


module.exports = router;