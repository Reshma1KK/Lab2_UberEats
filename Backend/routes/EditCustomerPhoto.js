const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("EditCustomerPhoto",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot update customer profile");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        profile_picture:data.data.profile_picture,
      }
      console.log("payload in backend upload img",payload)
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
