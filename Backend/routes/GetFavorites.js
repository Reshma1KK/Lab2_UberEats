const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.post("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("GetFavorites",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot add into favorites");
    }
    else if(data.status===200){
      let favorites=[];
      for(let i=0;i<data.data.length;i++){
        let favDetails={
          restaurant_id:data.data[i].restaurant_id,
          customer_id:data.data[i].customer_id,
          restaurant_name:data.data[i].restaurant_name,
          restaurant_location:data.data[i].restaurant_location,
        }
        favorites.push(favDetails);
      }
      console.log("Dishes:",JSON.stringify(favorites));
      res.status(200).json({favorites});
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
