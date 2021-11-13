"use strict";


var Customers = require("../models/CustomerSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Edit state For Customer");
  const res={};

  var query={_id:msg._id};
  console.log("msg.state",msg.state);
  var newValues=  { $set: {state :msg.state}};
  Customers.updateOne(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Customers){
         console.log("Updated state");
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
