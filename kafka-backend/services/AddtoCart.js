"use strict";


var Cart = require("../models/CartItemsModel")

  const handle_request = async (msg,callback) => {
    console.log("Inside add items to cart kafka backend");
    console.log(msg);
    const res={};
      var cart ={
        customer_name:msg.customerName,
        dish_name:msg.dishName,
        restaurant_name:msg.restaurantName,
        price:msg.price,
        dish_category:msg.dishCategory,
        current_order:msg.currentOrder,
        dish_id:msg.dish_id,
        restaurant_id:msg.restaurant_id,
        customer_id:msg.customer_id
      }
      Cart.findOne(cart, (error,data) => {
        if(error){
          res.writeHead(400,{
            "content-type":"text/plain",
          })
          console.log("Mongo Error");
          callback(error,null);
        }
        else{
          console.log("Fetching result");
          if(data){
                  console.log("item already exists")
                  res.status=400;
                  res.data="This item has been already added to cart!"
                  callback(null, res);
                }
          else{
           var newCart = new Cart({
             customer_name:msg.customerName,
             dish_name:msg.dishName,
             restaurant_name:msg.restaurantName,
             price:msg.price,
             dish_category:msg.dishCategory,
             current_order:msg.currentOrder,
             dish_id:msg.dish_id,
             restaurant_id:msg.restaurant_id,
             customer_id:msg.customer_id
          });
              newCart.save((insertErr,insertData) => {
              if(insertErr){
              console.log(insertErr)
              res.status=400;
              res.data="Cannot insert cart details into db"
                callback(null,error);
              }else{
                console.log("Inserted Successfully")
              res.status=200;
              res.data=insertData;
                callback(null, res);
              }
            });
          }
          }
        });
      }


exports.handle_request = handle_request;
