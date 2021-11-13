const express=require("express");
var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
const { secret }= require("../Util/config");
const { auth }=require("../Util/passportCustomer");

auth();
const router =express.Router();
router.post("/",(req, res) => {
  console.log("Inside Customer login");
  console.log('Req Body : ', req.body);
  kafka.make_request("CustomerLogin",req.body, (err,data)=>{
        if(err) {
        console.log("backend1",err);
        res.writeHead(400,{
            "Content-type":"text/plain",
          })
          res.end("Server error")
        }
        else if(data.status===200){
          const payload = {
            _id: data.data._id,
            name:data.data.name,
            email_id:data.data.email_id,
            profile_picture:data.data.profile_picture,
            date_of_birth:data.data.date_of_birth,
            city:data.data.city,
            state:data.data.state,
            country:data.data.state,
            nickname:data.data.nickname,
            favorites:data.data.favorites
          };
          console.log("Successfully logged in",payload);
          const token = jwt.sign(payload,secret,{
            expiresIn :1008000,
          });
          const fullToken = `JWT ${token}`
          console.log("Customer Login Token",fullToken)
          res.status(200).json({fullToken,payload});
        }
        else{
          console.log("backend2",err)
          console.log("Invalid data");
        res.writeHead(400,{
          "Content-type":"text/plain",
        })
        res.end("Invalid data")
        }
  })
  })


module.exports = router;
