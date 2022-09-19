let axios = require("axios");


// let getStates = async function (req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// let getDistricts = async function (req, res) {
//     try {
//         let id = req.params.stateId
//         let options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getByPin = async function (req, res) {
//     try {
//         let pin = req.query.pincode
//         let date = req.query.date
//         console.log(`query params are: ${pin} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
//         }
//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }









// let getOtp = async function (req, res) {
//     try {
//         let blahhh = req.body
        
//         console.log(`body is : ${blahhh} `)
//         var options = {
//             method: "post",
//             url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
//             data: blahhh
//         }

//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }
 //============ assi 1****************************************************
 const getbydistrictId=async function(req,res){
     try {
         let id= req.query.district_id
         let date=req.query.date
         let option ={
             method:"get",
             url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id= ${id}&date=${date}`
         }
         let result=await axios(option)
         let data=result.data
         res.status(200).send({msg:data,status:true})
     } catch (error) {
         res.status(500).send({msg:error.message,status:true})
     }
    }
//====================Whether assgnm=========================================

const getWhether=async function(req,res){
    try {
        let city=req.query.q;
        let apikey=req.query.appid
        let option ={
        method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        }
        let getdata=await axios(option);
        let data=getdata.data
        res.status(200).send({msg:data,status:true})
        // let temdata=getdata.data.main.temp
        // res.status(200).send({tempreture:temdata,status:true})

    } catch (error) {
        res.status(500).send({msg:error.message,status:false})

    }
}

const getsorted=async function(req,res){
try {
    let apikey=req.query.appid
    let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
let finalarr=[]
    for (let i=0;i<cities.length;i++){
        let obj={city:cities[i]}
        let result= await axios(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apikey}`)
        console.log(result)
        obj.temp=result.data.main.temp
        finalarr.push(obj)
    }
    console.log(finalarr)
    let sortedarr=finalarr.sort(function(a,b){return a.temp- b.temp})
    res.status(200).send({msg:sortedarr,status:true})

} catch (error) {
    res.status(500).send({msg:error.message,status:false})
}
}

const getallMemes= async function(req,res){
// try {
    let option={
        
        url:"https://api.imgflip.com/get_memes",
        method:"get"
    }
    
    let getdata= await axios(option)
    console.log(getdata.data)
    let data=getdata.data
    res.status(200).send({msg:data,status:true})
// } catch (error) {
//     res.status(500).send({msg:error.message,status:false})
// }
}

const creatememe=async function(req,res){
  try {
    let id=req.query.template_id
      let t1=req.query.text0
      let t2=req.query.text1
      let username=req.query.username
      let pass=req.query.password
  
      let option={
          method:"post",
          url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${t1}&text1=${t2}&username=${username}&password=${pass}`
      }
  let result=await axios(option);
  let data=result.data
  res.status(200).send({msg:data,status:true})
  } catch (error) {
    res.status(500).send({msg:error.message,status:false})

  } }

module.exports.getbydistrictId = getbydistrictId
module.exports.getWhether = getWhether
module.exports.getsorted = getsorted
module.exports.getallMemes = getallMemes
module.exports.creatememe = creatememe
