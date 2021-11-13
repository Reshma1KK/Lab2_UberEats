const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passport")

router.put("/",checkAuth,(req,res) =>{
  console.log(req.body)
  kafka.make_request("EditIngredients",req.body,(err,data) =>{
    if(err){
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot edit Dish Ingredients");
    }
    else if(data.status===200){
      const payload={
        _id:data.data._id,
        dish_ingredients:data.data.dish_ingredients
      }
      console.log("payload in backend edit dish Ingredients",payload)
      res.status(200).json({payload});
      // console.log("landing page");
      // res.end(JSON.stringify(data));
    }
    else{
      res.writeHead(400,{
        "Content-type":"text/plain",
      })
      res.end("Error editing dish name details")
    }
  })
})

module.exports = router;
