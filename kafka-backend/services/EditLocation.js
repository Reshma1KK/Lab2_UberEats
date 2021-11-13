"use strict";


var Restaurants = require("../models/RestaurantSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Edit Location");
  const res={};

  var query={_id:msg._id};
  var newValues=  { $set: {location :msg.newLocation}};

  Restaurants.updateOne(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Restaurants){
         console.log("Updated location");
         res.status=200;
         res.data=data;
         callback(null,res);
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
