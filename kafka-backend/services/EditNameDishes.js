"use strict";


var Dishes = require("../models/dishesModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Edit Name");
  const res={};

  var query={res_id:msg._id};
  var newValues=  { $set: {res_name :msg.newName}};

  Dishes.updateMany(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Dishes){
         console.log("Updated name in Dishes");
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
