const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");



router.post("/",checkAuth,(req,res) =>{
  console.log("Inside Get Order  Page");
  console.log("req.body",req.body);
  kafka.make_request("GetOrder",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch get order details");
    }
    else if(data.status === 200){
      let cartItems=[];
      for(let i=0;i<data.data.length;i++){
        let cartItemDetails={
          _id:data.data[i]._id,
          customer_name:data.data[i].customer_name,
          dish_name:data.data[i].dish_name,
          restaurant_name:data.data[i].restaurant_name,
          price:data.data[i].price,
          dish_category:data.data[i].dish_category,
          current_order:data.data[i].current_order,
          dish_id:data.data[i].dish_id,
          restaurant_id:data.data[i].restaurant_id,
          customer_id:data.data[i].customer_id,
          qty:data.data[i].qty,
        }
        cartItems.push(cartItemDetails);
      }
      console.log("cartItems:",JSON.stringify(cartItems));
      res.status(200).json({cartItems});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
          console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching cart details")
    }
  })
})


module.exports = router;
