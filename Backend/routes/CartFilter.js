const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passport");



router.get("/",checkAuth,(req,res) =>{
  console.log("Inside orders Page in Restaurants");
  console.log("req.body",req.body);
  kafka.make_request("CartFilter",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch orders details");
    }
    else{
    console.log("fetching past orders");
    res.end(JSON.stringify(data));
    }
  })
})


module.exports = router;
