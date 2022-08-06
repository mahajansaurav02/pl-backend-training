let text= "      Saurav Mahajan        ";
let lp= "THIS IS MY THIRD WEEK IN FUNCTIONUP"
let up ="this is the upper case function"
let trr= text.trim()
let getTrimmed=function(){
    console.log(trr)
}
let lower=lp.toLowerCase()
let getLower=function(){
    console.log(lower)
    
}
let upper=up.toUpperCase()
let getupper=function(){
    console.log(upper)
    
}




module.exports.trim=getTrimmed
module.exports.lower=getLower
module.exports.upper=getupper