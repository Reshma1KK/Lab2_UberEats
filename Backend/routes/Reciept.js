const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");


router.post("/",checkAuth,(req,res) =>{
  console.log("Inside restaurant Landing Page");
  kafka.make_request("Reciept",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch restaurant details");
    }
    else if(data.status===200){
        const reciept=[];
      const recieptDetails={
        location:data.data.location,
        customer_name:data.data.customer_name,
        restaurant_name:data.data.restaurant_name,
        order_status:data.data.order_status,
        date:data.data.date,
        temp:data.data.temp,
        spl_instructions:data.data.spl_instructions,
        total_qty:data.data.total_qty,
        total:data.data.total,
        delivery_status:data.data.delivery_status,
        qty:data.data.qty,
        dish_name:data.data.dish_name,
      }
      reciept.push(recieptDetails);
      res.status(200).json({reciept});
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
