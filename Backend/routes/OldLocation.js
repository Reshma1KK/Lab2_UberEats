const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("OldLocation",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot add location");
    }
    else if(data.status===200){
      const payload={
        current_order:data.data.current_order,
        location:data.data.location,
      }
      console.log("payload in backend",payload)
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error updating location details")
    }
  })
})

module.exports = router;
