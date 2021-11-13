"use strict";

const bcrypt = require('bcrypt');
var Restaurants = require("../models/RestaurantSignupModel")

const handle_request = async( msg, callback) => {
  console.log("Inside Login");
  const res={};

  Restaurants.findOne({email_id:msg.email},(error,data) =>{
    console.log("data",data);
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else{
        if(data===null || data.length ===0 || !bcrypt.compareSync(msg.password, data.password)){
        console.log("Invalid credentials");
        res.status = 400;
        res.data ="Invalid login credentials";
        callback(null,res);
      }
      else{
        console.log("login successful");
        res.status=200;
        res.data=data;
        callback(null,res);
      }
    }
  })
}

exports.handle_request = handle_request;
