const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer")

router.put("/",checkAuth,(req,res) =>{
console.log('Req Body : ', req.body);
  kafka.make_request("CompleteOrder",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot update order details");
    }
    else if(data.status===200){
      const payload={
        current_order:data.data.current_order,
        customer_name:data.data.customer_name,
        restaurant_name:data.data.restaurant_name,
        order_status:data.data.order_status,
        date:data.data.date,
        temp:data.data.temp,
        spl_instructions:data.data.spl_instructions,
        total_qty:data.data.total_qty,
        total:data.data.total
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
      res.end("Error updating order details")
    }
  })
})

module.exports = router;
