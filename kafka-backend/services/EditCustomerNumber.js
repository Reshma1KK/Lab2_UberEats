"use strict";


var Customers = require("../models/CustomerSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Edit Number For Customer");
  const res={};

  var query={_id:msg._id};
  console.log("msg.city",msg.city);
  var newValues=  { $set: {number :msg.phone}};
  Customers.updateOne(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Customers){
         console.log("Updated number");
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
