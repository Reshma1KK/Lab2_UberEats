const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passport");



router.post("/",checkAuth,(req,res) =>{
  console.log("Inside restaurant Dishes Page");
  console.log("req.body",req.body);
  kafka.make_request("Dishes",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch dishes details");
    }
    else if(data.status === 200){
      let dishes=[];
      for(let i=0;i<data.data.length;i++){
        let dishesDetails={
          _id:data.data[i]._id,
          res_id:data.data[i].res_id,
          dish_name:data.data[i].dish_name,
          dish_ingredients:data.data[i].dish_ingredients,
          dish_img:data.data[i].dish_img,
          dish_price:data.data[i].dish_price,
          dish_description:data.data[i].dish_description,
          dish_category:data.data[i].dish_category,
          res_name:data.data[i].res_name,
          type_of_food:data.data[i].type_of_food
        }
        dishes.push(dishesDetails);
      }
      console.log("Dishes:",JSON.stringify(dishes));
      res.status(200).json({dishes});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
          console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error fetching dishes details")
    }
  })
})


module.exports = router;
