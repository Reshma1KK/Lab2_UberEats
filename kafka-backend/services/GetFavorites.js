"use strict";


var Favorites = require("../models/favoritesModel")

const handle_request = async( msg, callback) => {
  console.log("Inside get favorites");
  const res={};
  console.log("msg.customer_id",msg.customer_id)
  Favorites.find({customer_id:msg.customer_id},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Favorites){
          console.log("data here djjd",data)
          console.log("Recieved favorites details");
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
