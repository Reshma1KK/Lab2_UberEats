"use strict";

const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const passportCus = require("passport");
const { secret } = require("./config");
const Customers = require("../models/CustomerSignupModel");


function auth() {
  const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: secret,
  };
  passportCus.use(
    new JwtStrategy(opts,(jwt_payload,callback) => {
      const user_id = jwt_payload._id;
      console.log("user_id cus",user_id)
      Customers.findById(user_id,(err,results) => {
        if(err){
          return callback(err,false);
        }
        if(results){
          callback(null,results);
        }
        else{
          callback(null,false);
        }
      })
    })
  )
}


exports.auth=auth;
exports.checkAuth = passportCus.authenticate("jwt",{session:false});
