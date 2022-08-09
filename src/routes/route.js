const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/sol1',function(req,res){
     let arr=[1,2,3,5,6,7]
     
     let total=0;
     for(var i in arr){
   
         total=total+arr[i]
   
     }
     let n= arr.pop()
     let result= n*(n+1)/2 
     let missingNumber= result-total
     res.send({data: missingNumber})

})

router.get('/sol2',function(req,res){
    let secondArr=[33, 34, 35, 37, 38]
    let leng=secondArr.length

    let total2=0;
    for (let i in secondArr){
        total2=total2+secondArr[i]

    }
    let firstNumber=secondArr[0]
    let lastnum=secondArr.pop();
    let sumOfNumbers= (leng+1)*(firstNumber+lastnum)/2
    let missingNum=sumOfNumbers - total2
    res.send({data:missingNum})
})

module.exports = router;
// adding this comment for no reason