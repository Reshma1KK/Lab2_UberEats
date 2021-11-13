"use strict";

const bcrypt = require('bcrypt');
var Restaurants = require("../models/RestaurantSignupModel")


const handle_request = async (msg,callback) => {
  console.log("Inside restaurant-signup kafka backend");
  console.log(msg);
  const res={};
    Restaurants.findOne({email_id:msg.email}, (error,data) => {
      if(error){
        res.writeHead(401,{
          "content-type":"text/plain",
        })
        console.log("Mongo Error");
        callback(error,null);
      }
      else{
        console.log("Fetching result");
        if(data){
                console.log("Email already exists")
                res.status=401;
                res.data="There is an email-id associated with this Restaurant!"
                callback(null, res);
              }
       else{
        //Hashing the password for Restaurant Signup
        console.log("inside hash");
        const saltRounds = 10;
        bcrypt.hash(msg.password,saltRounds,(hasherr,hash) =>{
          if(hasherr){
            console.log("cannot hash");
            res.status = 400;
            res.data="Cannot hash password";
            callback(null,res);
          }
       else{
         const newRes = new Restaurants({
               restaurantName :msg.name,
               email_id :msg.email,
               password :hash,
               location :msg.location,
               type_of_delivery :msg.status
        });
            newRes.save((insertErr,insertData) => {
            if(insertErr){
              console.log("Cannot insert restaurant details into db")
            res.status=400;
            res.data="Cannot insert restaurant details into db"
              callback(null,res);
            }else{
              console.log("Inserted Successfully")
            res.status=200;
            res.data=insertData;
              callback(null, res);

            }
          });
        }
      });
    }
  }
});
};



exports.handle_request = handle_request;
