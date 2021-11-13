"use strict";


var Dishes = require("../models/dishesModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Login");
  const res={};
  console.log("msg.res_id",msg.res_id)
  Dishes.find({res_id:msg.res_id},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Dishes){
          console.log("data here djjd",data)
          console.log("Recieved Dishes details");
          console.log(data);
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
