const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passport")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("AddDeliveryStatus",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot edit order status");
    }
    else if(data.status===200){
      const payload={
        order_status :data.data.delivery,
        temp:data.data.temp,
        restaurant_name:data.data.restaurant_name,
        customer_name:data.data.customer_name
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
