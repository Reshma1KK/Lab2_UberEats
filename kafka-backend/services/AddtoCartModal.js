"use strict";


var CartItems = require("../models/CartItemsModel")


const handle_request = async( msg, callback) => {
  console.log("Inside cart Items");
  const res={};
  console.log("msg.res_id",msg.res_id)
  CartItems.find({},
    {_id:1,dish_name:1,restaurant_name:1,current_order:1,dish_id:1,customer_id:1,restaurant_id:1,price:1,qty:1},
    (error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(CartItems){
          console.log("cartItems",data)
          console.log("Recieved CartItems details");
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
