const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");



router.get("/",checkAuth,(req,res) =>{
  console.log("Inside past orders Page");
  console.log("req.body",req.body);
  kafka.make_request("CustomerFilter",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch past order details");
    }
    else{
    console.log("fetching past orders");
    res.end(JSON.stringify(data));
    }
  })
})


module.exports = router;
