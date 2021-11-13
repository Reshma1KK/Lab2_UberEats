"use strict";


var Cart = require("../models/CartItemsModel")


const handle_request = async( msg, callback) => {
  console.log("Inside Login");
  const res={};
  console.log("msg.res_id",msg.res_id)
  Cart.find({current_order:msg.current_order},(error,data) =>{
    if(error){
      console.log("Error fetching data");
      callback(error,null);
    }
    else if(Cart){
          console.log("cart data",data)
          console.log("Recieved cart details");
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
