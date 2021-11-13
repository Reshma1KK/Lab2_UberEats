const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const favoritesSchema = new Schema({
  customer_name:{
    type:String,
    required:true
  },
  restaurant_name:{
    type:String,
    required:true
  },
  restaurant_location:{
    type:String,
    required:true
  },
})

const CustomerSignupSchema = new Schema ({
  name: {
    type:String,
    required:true
  },
  email_id: {
    type:String,
    required:true,
    unique:true
  },
  password: {
    type:String,
    required:true
  },
  profile_picture: {
    type:String
  },
  date_of_birth: {
    type:String
  },
  city: {
    type:String
  },
  state: {
    type:String
  },
  country: {
    type:String
  },
  nickname: {
    type:String
  },
  number:{
    type:String
  },
  favorites:[favoritesSchema],
},
{
  versionKey:false,
})

const CustomerSignup = mongoose.model("CustomerSignup",CustomerSignupSchema);
module.exports = CustomerSignup;
