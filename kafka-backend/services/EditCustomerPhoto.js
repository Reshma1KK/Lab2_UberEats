"use strict";


var Customers = require("../models/CustomerSignupModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Edit Customer Photo");
  const res={};

  var query={_id:msg._id};
  var newValues=  { $set: {profile_picture :msg.profile_picture}};

  Customers.updateOne(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching image data");
      callback(error,null);
    }
    else if(Customers){
         console.log("Updated image");
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
