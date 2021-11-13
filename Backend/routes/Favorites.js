const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.post("/",checkAuth,(req,res) =>{
  kafka.make_request("Favorites",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot add into favorites");
    }
    else if(data.status===200){
      const payload={
        restaurant_id:data.data.restaurant_id,
        customer_id:data.data.customer_id,
        restaurant_name:data.data.restaurant_name,
        restaurant_location:data.data.restaurant_location,
      }
      console.log("payload in backend",payload)
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
      console.log("Invalid data");
    res.writeHead(400,{
      "Content-type":"text/plain",
    })
    console.log(err)
    res.end("Invalid data")
    }
  })
})

module.exports = router;
