const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemsSchema = new Schema ({
  customer_name: {
    type:String,
    required:true
  },
  customer_email: {
    type:String,
    required:true,
  },
  dish_name: {
    type:String,
    required:true
  },
  restaurant_name: {
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  dish_category: {
    type:String,
    required:true
  },
  current_order: {
    type:Boolean,
    default:true
  },
  location:{
    type:String
  },
  date: {
    type:String
  },
  order_status:{
    type:String
  },
  temp: {
    type:Number,
  },
  delivery_status:{
    type:String
  },
  total:{
    type:String
  },
  spl_instructions: {
    type:String
  },
  qty:{
    type:String
  },
  dish_id:{
    type:String,
    required:true,
  },
  customer_id:{
    type:String,
    required:true,
  },
  restaurant_id:{
    type:String,
    required:true,
  },
  total_qty:{
    type:String
  },
  reciept:{
    id:{type:String},
    dish_name:{type:String},
    prive:{type:Number},
    qty:{type:String}
  }

},
{
  versionKey:false,
  timestamps:true
})

const CartItems = mongoose.model("CartItems",CartItemsSchema);
module.exports = CartItems;
