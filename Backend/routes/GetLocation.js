const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");



router.post("/",checkAuth,(req,res) =>{
  console.log("Inside Get Location Page");
  console.log("req.body",req.body);
  kafka.make_request("GetLocation",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch location details");
    }
    else if(data.status===200){
      const payload={
        customer_name:data.data.customer_name,
        location:data.data.location,
      }
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
      console.log("payload in loc",payload)
    }
    else{
          console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching location details")
    }
  })
})


module.exports = router;
