const router = require ("express").Router();
var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
const { secret } = require("../Util/config");
const { checkAuth } = require("../Util/passportCustomer");



router.post("/",checkAuth, (req, res) => {
  console.log("Inside add dish");
  console.log('Req Body : ', req.body);
  kafka.make_request("AddtoCart",req.body, (err,data)=>{
        if(err) {
        res.writeHead(400,{
            "Content-type":"text/plain",
          })
          res.end("Server error")
        }
        else if(data.status===200){
          const payload = {
            customer_name:data.data.customer_name,
            dish_name:data.data.dish_name,
            restaurant_name:data.data.restaurant_name,
            price:data.data.price,
            dish_category:data.data.dish_category,
            current_order:data.data.current_order,
            dish_id:data.data.dish_id,
            restaurant_id:data.data.restaurant_id,
            customer_id:data.data.customer_id,
            qty:data.data.qty,
          };
          console.log("Successfully added to cart",payload);
          res.status(200).json({payload});
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
