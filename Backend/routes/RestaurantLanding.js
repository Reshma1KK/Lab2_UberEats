const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passport");


router.post("/",checkAuth,(req,res) =>{
  console.log("Inside restaurant Landing Page");
  kafka.make_request("RestaurantLanding",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch restaurant details");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        restaurantName:data.data.restaurantName,
        email_id:data.data.email_id,
        location:data.data.location,
        type_of_delivery:data.data.type_of_delivery,
        picture:data.data.picture,
        description:data.data.description,
        contact:data.data.contact,
        timings:data.data.timings,
        type_of_food:data.data.type_of_food,
      }
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
          console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching restaurant details")
    }
  })
})


module.exports = router;
