"use strict";

const bcrypt = require('bcrypt');
var Customers = require("../models/CustomerSignupModel")


const handle_request = async (msg,callback) => {
  console.log("Inside signup-customer kafka backend");
  console.log(msg);
  const res={};
    Customers.findOne({email_id:msg.email}, (error,data) => {
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
                console.log("Email already exists")
                res.status=400;
                res.data="There is an email-id associated with this Restaurant!"
                callback(null, res);
              }
       else{
         //Hashing the password for Restaurant Signup
         console.log("inside hash");
         const saltRounds = 10;
         bcrypt.hash(msg.password,saltRounds,(hasherr,hash) =>{
           if(hasherr){
             console.log("cannot hash");
             res.status = 400;
             res.data="Cannot hash password";
             callback(null,res);
           }
        else{
         var newCustomer = new Customers({
               name :msg.name,
               email_id :msg.email,
               password :hash,
        });
            newCustomer.save((insertErr,insertData) => {
            if(insertErr){
              console.log("Cannot insert restaurant details into db")
            res.status=400;
            res.data="Cannot insert restaurant details into db"
              callback(null,error);
            }else{
              console.log("Inserted Successfully")
            res.status=200;
            res.data=insertData;
              callback(null, res);
            }
          });
        }
      });
    }
    }
  });
};



exports.handle_request = handle_request;
