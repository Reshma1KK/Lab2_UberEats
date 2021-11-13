const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishesSchema = new Schema ({
  res_id:{
    type:String,
    required:true
  },
  dish_name: {
    type:String,
    required:true
  },
  dish_img: {
    type:String,
  },
  dish_ingredients: {
    type:String,
    required:true
  },
  dish_price: {
    type:Number,
    required:true
  },
  dish_description:{
    type:String
  },
  dish_category: {
    type:String
  },
  res_name: {
    type:String
  },
  type_of_food:{
    type:String
  },

},
{
  versionKey:false,
  timestamps:true
})
const Dishes = mongoose.model("Dishes",dishesSchema);
module.exports = Dishes;
// const dishesModel = mongoose.model("dishes",dishesSchema);
// export default dishesModel;
