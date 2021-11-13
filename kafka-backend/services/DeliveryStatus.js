"use strict";


var Cart = require("../models/CartItemsModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Update status");
  const res={};

  var query={current_order:msg.currentOrder};
  var newValues=  { $set: {delivery_status :msg.status}};

  Cart.updateMany(query,newValues,(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Cart){
         console.log("Updated status");
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
