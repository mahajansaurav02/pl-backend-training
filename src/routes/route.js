const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    let movies = ['Heropanti 2', 'Dhoom 3', 'Tere naam','Rab ne bana di jodi']
    res.send(movies)
})

router.get('/movies/:indexNumber',function(req,res){
    let movies = ['Heropanti 2', 'Dhoom 3', 'Tere naam','Rab ne bana di jodi','harry potter','fast and furious','mitwa']
    let reqparam=req.params
    let moviename=reqparam.indexNumber
    for (let i in movies){
        let num=movies[i]
    if (moviename == [i]){
       res.send(movies[i])
      break;
    }
    
}   
    res.send("Error : Use a valid Index")
}
)

router.get('/films',function(req,res){
    let moviearr=[
        {'id': 1,
        'name': 'The mig'},
        {'id': 2,
        'name': 'Mission impossible 2'},
        {'id': 3,
        'name': 'The conjuring'},
        {'id': 4,
        'name': 'vikings'},
        {'id': 5,
        'name': 'Game of thrones'}
]
res.send(moviearr)
})
router.get('/films/:filmId',function(req,res){
    let films=[
        {'id': 1,
        'name': 'The mig'},
        {'id': 2,
        'name': 'Mission impossible 2'},
        {'id': 3,
        'name': 'The conjuring'},
        {'id': 4,
        'name': 'vikings'},
        {'id': 5,
        'name': 'Game of thrones'}
]

    let filmId=req.params.filmId
    for (let i=0;i<films.length;i++){
        let film=films[i]
        // console.log(film)
        if (film.id == filmId){
           return res.send(film)

        }
    }
    res.send('No movie exists with this id')

})




// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

module.exports = router;