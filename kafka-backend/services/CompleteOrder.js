"use strict";


var Cart = require("../models/CartItemsModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Complete Order For Customer");
  const res={};

  var query={current_order:true,
            restaurant_name:msg.restaurant_name,
            customer_name:msg.customer_name
          };
  console.log("current_order",msg.current_order)
  console.log();
  var newValues=  { $set: {
    current_order:msg.current_order,
    order_status:msg.order_status,
    date:msg.date,
    temp:msg.temp,
    spl_instructions:msg.spl_instructions,
    total_qty:msg.total_qty,
    total:msg.total
  }}
  Cart.updateMany(query,newValues,(error,data) =>{
    if(error){
      console.log(error)
      console.log("Error updating data");
      callback(error,null);
    }
    else if(Cart){
         console.log("Updated order placed");
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
