var express = require('express');
// const dotenv = require("dotenv")
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var kafka = require('./kafka/client');
const session = require("express-session");
var mongoose=require("mongoose");
const config = require("./Util/config");
const multer = require("multer");
const upload = multer({dest : "uploads/"})



// dotenv.config()
// const PORT = process.env.PORT



app.use(cors({ origin: `http://13.56.184.154:3000`, credentials: true }));

app.use(
  session({
  secret: "cmpe_273_UberEats",
  resave:false,
  saveUninitialized: false,
  duration: 60*60*2000,
  activeDuration: 5*60*1000,
}),
);

// mongoose.connect(process.env.MONGO_URI,options,(err,res) => {
//   if (err){
//     console.log(err);
//     console.log("MongoDB connection failed");
//   }
//   else{
//     global.res=res;
//     console.log("MongoDB connected");
//   }

mongoose.connect(
    config.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 500
    },
    (err,res) => {
      if(err){
        console.log("Cannot connect to MongoDB")
        console.log(err)
      }
      else{
      // console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
      console.log("Connection Successful")
    }
    });

    mongoose.set("debug", (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});


// app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://13.56.184.154:3000");
  res.setHeader("Access-Control-Allow-Credentials",'true');
  res.setHeader("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE,UPDATE");
  res.setHeader("Access-Control-Allow-Headers","Access-Control-Allow-Method,Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-type");
  res.setHeader("Cache-Control","no-cache");
  next();
});

const RestaurantSignup = require("./routes/RestaurantSignUp.js");
const CustomerSignup = require("./routes/CustomerSignup.js");
const RestaurantLogin = require("./routes/RestaurantLogin");
const CustomerLogin = require("./routes/CustomerLogin");
const RestaurantLanding =  require("./routes/RestaurantLanding");
const EditLocation = require("./routes/EditLocation");
const EditDescription = require("./routes/EditDescription")
const EditContact = require("./routes/EditContact");
const RestaurantDisplay = require("./routes/RestaurantDisplay");
const CustomerPage = require("./routes/CustomerPage");
const EditCustomerNameInCustomerSignUp = require("./routes/EditCustomerNameInCustomerSignUp");
const EditCustomerDOB = require("./routes/EditCustomerDOB")
const EditCustomerCity = require("./routes/EditCustomerCity")
const AddDishes = require("./routes/AddDishes")
const Dishes = require("./routes/Dishes")
const Favorites = require("./routes/Favorites");
const GetFavorites = require("./routes/GetFavorites")
const CustomerRestaurantLanding =  require("./routes/CustomerRestaurantLanding");
const CustomerDishes = require("./routes/CustomerDishes")
const AddtoCart = require("./routes/AddtoCart")
const DeleteCart = require("./routes/DeleteCart")
const AddtoCartModal = require("./routes/AddtoCartModal")
const RemoveFromCart = require("./routes/RemoveFromCart")
const GetOrder = require("./routes/GetOrder")
const OldLocation = require("./routes/OldLocation")
const NewLocation = require("./routes/NewLocation")
const GetLocation = require("./routes/GetLocation")
const DeliveryStatus=require("./routes/DeliveryStatus")
const CompleteOrder = require("./routes/CompleteOrder")
const CustomerFilter = require("./routes/CustomerFilter")
const Reciept = require("./routes/Reciept")
const CancelNewOrderCustomer = require("./routes/CancelNewOrderCustomer")
const CartFilter = require("./routes/CartFilter")
const AddDeliveryStatus = require("./routes/AddDeliveryStatus")
const CustomerProfile = require("./routes/CustomerProfile")
const EditTimings = require("./routes/EditTimings")
const EditName = require("./routes/EditName")
const EditNameinFav = require("./routes/EditNameinFav")
const EditNameDishes = require("./routes/EditNameDishes")
const EditNameCart = require("./routes/EditNameCart")
const EditCustomerState = require("./routes/EditCustomerState")
const EditCustomerCountry = require("./routes/EditCustomerCountry")
const EditNickName = require("./routes/EditNickName")
const EditCustomerEmail = require("./routes/EditCustomerEmail")
const EditCustomerNumber = require("./routes/EditCustomerNumber")
const EditDishName = require("./routes/EditDishName")
const EditIngredients = require("./routes/EditIngredients")
const EditPrice = require("./routes/EditPrice")
const EditDishDescription = require("./routes/EditDishDescription")
const EditCategory = require("./routes/EditCategory")
const EditImg = require("./routes/EditImg")
const UploadImg = require("./routes/UploadImg")
const UploadDishesImg = require("./routes/UploadDishesImg")
const AddDishImg = require("./routes/AddDishImg")
const EditCustomerPhoto = require("./routes/EditCustomerPhoto")

app.use("/RestaurantSignup",RestaurantSignup);
app.use("/CustomerSignup",CustomerSignup);
app.use("/RestaurantLogin",RestaurantLogin);
app.use("/CustomerLogin",CustomerLogin);
app.use("/RestaurantLanding",RestaurantLanding);
app.use("/EditLocation",EditLocation);
app.use("/EditDescription",EditDescription);
app.use("/EditContact",EditContact);
app.use("/RestaurantDisplay",RestaurantDisplay)
app.use("/CustomerPage",CustomerPage);
app.use("/EditCustomerNameInCustomerSignUp",EditCustomerNameInCustomerSignUp);
app.use("/EditCustomerDOB",EditCustomerDOB);
app.use("/EditCustomerCity",EditCustomerCity);
app.use("/AddDishes",AddDishes)
app.use("/Dishes",Dishes)
app.use("/Favorites",Favorites);
app.use("/GetFavorites",GetFavorites);
app.use("/CustomerRestaurantLanding",CustomerRestaurantLanding)
app.use("/CustomerDishes",CustomerDishes)
app.use("/AddtoCart",AddtoCart);
app.use("/DeleteCart",DeleteCart);
app.use("/AddtoCartModal",AddtoCartModal);
app.use("/RemoveFromCart",RemoveFromCart);
app.use("/GetOrder",GetOrder);
app.use("/OldLocation",OldLocation);
app.use("/NewLocation",NewLocation);
app.use("/GetLocation",GetLocation)
app.use("/DeliveryStatus",DeliveryStatus)
app.use("/CompleteOrder",CompleteOrder)
app.use("/CustomerFilter",CustomerFilter);
app.use("/Reciept",Reciept)
app.use("/CancelNewOrderCustomer",CancelNewOrderCustomer)
app.use("/CartFilter",CartFilter);
app.use("/AddDeliveryStatus",AddDeliveryStatus)
app.use("/CustomerProfile",CustomerProfile)
app.use("/EditTimings",EditTimings)
app.use("/EditName",EditName)
app.use("/EditNameinFav",EditNameinFav)
app.use("/EditNameDishes",EditNameDishes)
app.use("/EditNameCart",EditNameCart)
app.use("/EditCustomerState",EditCustomerState)
app.use("/EditCustomerCountry",EditCustomerCountry)
app.use("/EditNickName",EditNickName)
app.use("/EditCustomerEmail",EditCustomerEmail)
app.use("/EditCustomerNumber",EditCustomerNumber)
app.use("/EditDishName",EditDishName)
app.use("/EditIngredients",EditIngredients)
app.use("/EditPrice",EditPrice)
app.use("/EditDishDescription",EditDishDescription)
app.use("/EditCategory",EditCategory)
app.use("/EditImg",EditImg)
app.use("/UploadImg",UploadImg)
app.use("/UploadDishesImg",UploadDishesImg)
app.use("/AddDishImg",AddDishImg)
app.use("/EditCustomerPhoto",EditCustomerPhoto)


  app.listen(3001,()=>{
      console.log(`Server running on port 3001`)
  });
