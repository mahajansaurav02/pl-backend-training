let d= new Date();
let today=function(){
    console.log(d)
}

let monthget=d.toLocaleString('default', { month: 'long' })
let month=function(){
    console.log(monthget)
}


let getBatchInfo=function(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system")
}

module.exports.Date=today
module.exports.month=month
module.exports.batch=getBatchInfo