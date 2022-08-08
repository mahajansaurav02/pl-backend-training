const { json } = require('body-parser');
const { request } = require('express');
const express = require('express');
const _ = require('lodash');
const abc = require('../introduction/intro')
const wel=require('../logger/logger.js')
const help=require('../util/helper.js')
const form=require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    wel.welcomef()
    help.Date()
    help.month()
    help.batch()
    form.trim()
    form.lower()
    form.upper()
    let arr1=["January",'February','March','April','May','Jun','July','August','September','October','November','December']
    console.log(_.chunk(arr1,3))
    let arr2=[1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(arr2,9))

    let arr3=_.union([1,2,3,4,5],[2,1,3,4,5,6,7],[9,7,5,4,7,4],[10,2,4,3],[9,8,11])
    console.log(arr3)
    let arr4=[["Company","Hyundai"],["car","verna"],["Model","V6"],["Colour","White"],["gear","Automatic"]]
    console.log(_.fromPairs(arr4))
    res.send('My second ever api!')
});

request.get('/student-name/:name', function(req,res){
    console.log("This is the request of students details :"+ JSON.stringify(req,params))
    let reqparams=req.params
    let studentname=reqparams.name
    console.log("This is the Name of the student "+studentname)
    let studentdetails=(studentname +" "+studentname)
    res.send(studentdetails)

})


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason