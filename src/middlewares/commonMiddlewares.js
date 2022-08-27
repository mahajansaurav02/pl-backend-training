
const mid1= function ( req, res, next) {
    let data=req.headers
if (!data.isfreeappuser){
    res.send("Require Header is not present ")
}else{
    req.isFreeAppUser=Boolean(req.headers.isfreeappuser)
}
    next()
}





module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
