const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  customer_id:{
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
  restaurant_id:{
    type:String,
    required:true
  },
})


const Favorites = mongoose.model("Favorites",favoritesSchema);
module.exports = Favorites;
