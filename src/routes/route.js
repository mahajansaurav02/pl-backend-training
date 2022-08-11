const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { result } = require('underscore');

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
    let playerName=playersob.name
     let isNamedouble = false

    for (let i=0;i<playrearr.length;i++){
        let Player=playrearr[i]
        if(Player.name==playerName){
            isNamedouble= true
            break;
        }
    }
    if (isNamedouble){
        res.send("player is already exist")
    } else{
        playrearr.push(playersob)
        res.send(playrearr)
    }
   
})
let peopleList=[
{
    name: "PK",
    age: 10,
    gender: "male",
    Votingstatus:false
  
    },
{
    name: "SK",
    age: 20,
    gender: "male",
    Votingstatus:false
  
    },
{
    name: "AA",
    age: 70,
    gender: "male",
    Votingstatus:false
  
    },
{
    name: "SC",
    age: 5,
    gender: "male",
    Votingstatus:false
  
    },
{
    name: "HO",
    age: 40,
    gender: "male",
    Votingstatus:false
  
    },

]
router.post('/voting-post',function(req,res){
    let querypar=req.query.input;
    let finalarr=[]
    for(let i=0;i<peopleList.length;i++){

        let list=peopleList[i]
        if (list.age>=querypar){
           list.Votingstatus=true

           finalarr.push(peopleList[i])
          
        }
    }   
  res.send({data:finalarr,status:true})
})

module.exports = router;
// adding this comment for no reason