const router = require ("express").Router();
var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
const { secret } = require("../Util/config");
const { auth } = require("../Util/passport");

auth();

router.post("/", (req, res) => {
  console.log("Inside signup");
  console.log('Req Body : ', req.body);
  kafka.make_request("RestaurantLogin",req.body, (err,data)=>{
        if(err) {
        res.writeHead(400,{
            "Content-type":"text/plain",
          })
          res.end("Server error")
        }
        else if(data.status===200){
          const payload = {
            _id:data.data._id,
            restaurantName:data.data.restaurantName,
            email_id:data.data.email_id,
            location:data.data.location,
            type_of_delivery:data.data.type_of_delivery,
          };
          console.log("Successfully logged in",payload);
          const token = jwt.sign(payload,secret,{
            expiresIn :1008000,
          });
          const fullToken = `JWT ${token}`
          console.log(fullToken)
          console.log("payload",payload);
          res.status(200).json({fullToken,payload});
        }
        else{
          console.log("Invalid Credentials");
        res.writeHead(400,{
          "Content-type":"text/plain",
        })
          console.log("Or here")
        console.log(err)
        res.end("Invalid Credentials")
        }
  })
  })


module.exports = router;
