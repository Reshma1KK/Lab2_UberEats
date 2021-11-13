"use strict";


var Restaurants = require("../models/RestaurantSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Login");
  const res={};

  Restaurants.find({},{restaurantName:1,_id:1,location:1,type_of_delivery:1,type_of_food:1,description:1,picture:1},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Restaurants){
          console.log("Recieved restaurant details");
          res.status=200;
          res.data=data;
          callback(null,res)
        }
        else{
          if(data === null){
            res.status=400;
            res.data="No details found";
            callback(null,res);
          }
        }
      });
    }


exports.handle_request = handle_request;
