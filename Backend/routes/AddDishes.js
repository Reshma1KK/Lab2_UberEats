const router = require ("express").Router();
var kafka = require("../kafka/client");
const jwt = require("jsonwebtoken");
const { secret } = require("../Util/config");
const { checkAuth } = require("../Util/passport.js");




router.post("/",checkAuth, (req, res) => {
  console.log("Inside add dish");
  console.log('Req Body : ', req.body);
  kafka.make_request("AddDishes",req.body, (err,data)=>{
        if(err) {
        res.writeHead(400,{
            "Content-type":"text/plain",
          })
          res.end("Server error")
        }
        else if(data.status===200){
          const payload = {
            res_id:data.data.res_id,
            dish_name:data.data.dish_name,
            dish_ingredients:data.data.dish_ingredients,
            dish_price:data.data.dish_price,
            dish_description:data.data.dish_description,
            dish_category:data.data.dish_category,
            res_name:data.data.res_name,
            type_of_food:data.data.type_of_food,
            dish_img:data.data.dish_img,
          };
          console.log("Successfully added dish",payload);
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
