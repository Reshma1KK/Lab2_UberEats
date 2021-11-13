const router = require ("express").Router();
var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
const { secret } = require("../Util/config");
const { checkAuth } = require("../Util/passportCustomer");

router.delete("/",checkAuth, (req, res) => {
  console.log("Inside delete dish");
  console.log('Req Body : ', req.body);
  kafka.make_request("DeleteCart",req.body, (err,data)=>{
        if(err) {
        res.writeHead(400,{
            "Content-type":"text/plain",
          })
          res.end("Server error")
        }
        else if(data.status===200){
          console.log("Successfully deleted from cart");
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
