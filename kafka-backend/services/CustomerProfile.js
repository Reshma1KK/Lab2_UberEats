"use strict";


var Customers = require("../models/CustomerSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Login");
  const res={};

  Customers.findOne({name:msg.name},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Customers){
          console.log("kafka id",msg.name)
          console.log("Recieved customer details");
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
