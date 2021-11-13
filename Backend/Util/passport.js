"use strict";

const JwtStrategy = require("passport-jwt").Strategy;
const {ExtractJwt} = require('passport-jwt');
// const { ExtractJwt } = require("passport-jwt");
var Passport = require("passport").Passport,
passport = new Passport();
const { secret } = require("./config");
const Restaurants = require("../models/RestaurantSignupModel");


function auth() {
  console.log("Inside auth")
  const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: secret,
  };
  console.log("opts",opts)
  console.log("secretOrKey",secret);
  console.log("jwtFromRequest",ExtractJwt.fromAuthHeaderWithScheme("jwt"));
  passport.use(
    new JwtStrategy(opts,(jwt_payload,callback) => {
      const user_id = jwt_payload._id;
      console.log("user res",user_id)
      Restaurants.findById(user_id,(err,results) => {
        if(err){
          // console.log("error in passport",err);
          // console.log("Error Invalid user")
          return callback(err,false);
        }
        if(results){
          callback(null,results);
        }
        else{
            // console.log("No error, Valid user")
          callback(null,false);
        }
      })
    })
  )
}


exports.auth=auth;
exports.checkAuth = passport.authenticate("jwt",{session:false});
