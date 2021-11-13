const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSignupSchema = new Schema ({
  restaurantName: {
    type:String,
    required:true
  },
  email_id: {
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  location: {
    type:String,
    required:true
  },
  picture: {
    type:String
  },
  description: {
    type:String
  },
  contact: {
    type:String
  },
  timings: {
    type:String
  },
  type_of_delivery: {
    type:String,
    required:true
  },
  type_of_food:{
    type:String
  },
},
{
  versionKey:false
})

const RestaurantSignup = mongoose.model("RestaurantSignup",RestaurantSignupSchema);
module.exports = RestaurantSignup;
