"use strict";

const bcrypt = require('bcrypt');
var Customers = require("../models/CustomerSignupModel")

const handle_request = async( msg, callback) => {
  console.log("Inside Customer Login");
  const res={};

  Customers.findOne({email_id:msg.email},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else{
      console.log(msg.password);
      if(data ===null || data.length ===0 || !bcrypt.compareSync(msg.password, data.password)){
        console.log("Invalid credentials");
        res.status = 400;
        res.data ="Invalid login credentials";
        callback(null,res);
      }
      else{
        console.log("login successful");
        res.status=200;
        res.data=data;
        console.log(data);
        callback(null,res);
      }
    }
  })
}

exports.handle_request = handle_request;
