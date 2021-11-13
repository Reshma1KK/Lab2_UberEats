const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");



router.get("/",checkAuth,(req,res) =>{
  console.log("Inside restaurant Dishes Page");
  console.log("req.body",req.body);
  kafka.make_request("AddtoCartModal",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch cart details");
    }
    else if(data.status === 200){
      let cartItems=[];
      for(let i=0;i<data.data.length;i++){
        let cartItemsDetails={
          _id:data.data[i]._id,
          dish_name:data.data[i].dish_name,
          restaurant_name:data.data[i].restaurant_name,
          current_order:data.data[i].current_order,
          dish_id:data.data[i].dish_id,
          customer_id:data.data[i].dish_id,
          restaurant_id:data.data[i].restaurant_id,
          price:data.data[i].price,
          qty:data.data[i].qty,
        }
        cartItems.push(cartItemsDetails);
      }
      console.log("Cart:",JSON.stringify(cartItems));
      res.status(200).json({cartItems});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
          console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching cartItems details")
    }
  })
})


module.exports = router;
