const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

let playrearr=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
    {
        "name": "Rahul",
        "dob": "24/22/2000",
        "gender": "male",
        "city": "jalgaon",
        "sports": [
        "Wrestling"
        ]
        },
    {
        "name": "Tejas",
        "dob": "20/08/1997",
        "gender": "male",
        "city": "Nashirabad",
        "sports": [
        "Table tennis"
        ]
        },
    {
        "name": "Akshay",
        "dob": "05/05/2000",
        "gender": "male",
        "city": "pimprala",
        "sports": [
        "Cricket"
        ]
        }
        
]

router.post('/players-post',function(req,res){
    let playersob=req.body
    // console.log(playersob)
    playrearr.push(playersob)
    res.send(playrearr)
})

module.exports = router;
// adding this comment for no reason