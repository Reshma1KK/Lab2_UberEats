const router = require ("express").Router();
var kafka = require("../kafka/client");

router.post("/",(req,res) =>{
  console.log(req.body)
  kafka.make_request("DeliveryStatus",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot update delivery status");
    }
    else if(data.status===200){
      const payload={
        current_order:data.data.current_order,
        delivery_status:data.data.delivery_status
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
      res.end("Error fetching restaurant details")
    }
  })
})

module.exports = router;
