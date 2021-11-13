const router = require ("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../Util/passportCustomer");


router.post("/",checkAuth,(req,res) =>{
  console.log("Inside customer profile Page");
  console.log("req.id",req.body);
  kafka.make_request("CustomerPage",req.body,(err,data) =>{
    console.log("err data",err)
    if(err){
      console.log(err)
      res.writeHead(400,{
        "Content-type":"text/plain",
      });
      res.end("Cannot fetch customer details");
    }
    else if(data.status === 200){
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
        favorites:data.data.favorites,
        country:data.data.country,
        number:data.data.number,
        about:data.data.about
      };
      res.status(200).json({payload});
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
