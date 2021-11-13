const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");


router.get("/",checkAuth,(req,res) =>{
  console.log("Inside customer Landing Page");
  kafka.make_request("RestaurantDisplay",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch restaurant details");
    }
    else{
      console.log(data)
      res.status(200).json({data});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
  })
})


module.exports = router;
