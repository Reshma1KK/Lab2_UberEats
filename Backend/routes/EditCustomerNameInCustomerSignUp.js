const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth }=require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
  kafka.make_request("EditCustomerNameInCustomerSignUp",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch restaurant details");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        name:data.data.name
      }
      console.log("payload in backend",payload)
      res.status(200).json({payload});
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
