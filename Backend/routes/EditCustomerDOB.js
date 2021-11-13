const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("EditCustomerDOB",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot edit CustomerDOB");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        name:data.data.name,
        date_of_birth:data.data.date_of_birth,
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
