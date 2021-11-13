"use strict";


var Favorites = require("../models/favoritesModel")

  const handle_request = async (msg,callback) => {
    console.log("Inside favorites kafka backend");
    console.log(msg);
    const res={};
      var fav ={
        restaurant_id:msg.restaurant_id,
        customer_id:msg.customer_id,
        restaurant_name:msg.restaurant_name,
        restaurant_location:msg.restaurant_location,
      }
      console.log("fav",fav);
      Favorites.findOne(fav, (error,data) => {
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
                  console.log("Already made Fvaorite")
                  res.status=400;
                  res.data="This restaurant has already been made favorite by you!"
                  callback(null, res);
                }
          else{
           var newFav = new Favorites({
             restaurant_id:msg.restaurant_id,
             customer_id:msg.customer_id,
             restaurant_name:msg.restaurant_name,
             restaurant_location:msg.restaurant_location,
          });
              newFav.save((insertErr,insertData) => {
              if(insertErr){
              console.log(insertErr)
              res.status=400;
              res.data="Cannot add restaurant as favorite"
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
