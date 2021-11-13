"use strict";


var Dishes = require("../models/dishesModel")

  const handle_request = async (msg,callback) => {
    console.log("Inside add dishes kafka backend");
    console.log(msg);
    const res={};
      var dish ={
        res_id:msg.res_id,
        dish_name:msg.dishName,
        dish_ingredients:msg.dishIngredients,
        dish_price:msg.dishPrice,
        dish_description:msg.dishDescription,
        dish_category:msg.dishCategory,
        res_name:msg.resName,
        type_of_food:msg.type,
        dish_img:msg.dish_img,
      }
      Dishes.findOne(dish, (error,data) => {
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
                  console.log("Dish already exists")
                  res.status=400;
                  res.data="This dish has already been added!"
                  callback(null, res);
                }
          else{
           var newDish = new Dishes({
             res_id:msg.res_id,
             dish_name:msg.dishName,
             dish_img:msg.dishImg,
             dish_ingredients:msg.dishIngredients,
             dish_price:msg.dishPrice,
             dish_description:msg.dishDescription,
             dish_category:msg.dishCategory,
             res_name:msg.resName,
             type_of_food:msg.type,
             dish_img:msg.dish_img,
          });
              newDish.save((insertErr,insertData) => {
              if(insertErr){
              console.log(insertErr)
              res.status=400;
              res.data="Cannot insert dishes details into db"
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
