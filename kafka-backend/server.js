var connection =  new require('./kafka/Connection');
const mongoose = require('mongoose');
var RestaurantSignup = require('./services/RestaurantSignup.js');
var CustomerSignup= require("./services/CustomerSignup.js");
var RestaurantLogin = require('./services/RestaurantLogin.js');
var CustomerLogin = require('./services/CustomerLogin.js');
var RestaurantLanding=require("./services/RestaurantLanding.js")
var EditLocation = require("./services/EditLocation")
var EditDescription = require("./services/EditDescription")
var EditContact = require("./services/EditContact")
var RestaurantDisplay = require("./services/RestaurantDisplay")
var CustomerPage = require("./services/CustomerPage")
var EditCustomerNameInCustomerSignUp = require("./services/EditCustomerNameInCustomerSignUp")
var EditCustomerDOB = require ("./services/EditCustomerDOB");
var EditCustomerCity = require ("./services/EditCustomerCity")
var AddDishes = require("./services/AddDishes");
var Dishes = require("./services/Dishes")
var Favorites = require("./services/Favorites")
var GetFavorites = require("./services/GetFavorites")
var CustomerRestaurantLanding=require("./services/RestaurantLanding.js")
var CustomerDishes = require("./services/Dishes")
var AddtoCart = require("./services/AddtoCart")
var DeleteCart = require("./services/DeleteCart")
var AddtoCartModal=require("./services/AddtoCartModal")
var RemoveFromCart = require("./services/RemoveFromCart")
var GetOrder = require("./services/GetOrder");
var OldLocation = require("./services/OldLocation");
var NewLocation = require("./services/NewLocation");
var GetLocation = require("./services/GetLocation")
var DeliveryStatus = require("./services/DeliveryStatus")
var CompleteOrder = require("./services/CompleteOrder")
var CustomerFilter = require("./services/CustomerFilter")
var Reciept = require("./services/Reciept")
var CancelNewOrderCustomer = require("./services/CancelNewOrderCustomer")
var CartFilter = require("./services/CartFilter")
var AddDeliveryStatus = require("./services/AddDeliveryStatus")
var CustomerProfile = require("./services/CustomerProfile")
var EditTimings = require("./services/EditTimings")
var EditName = require("./services/EditName")
var EditNameinFav = require("./services/EditNameinFav")
var EditNameCart = require("./services/EditNameCart")
var EditNameDishes = require("./services/EditNameDishes")
var EditCustomerState = require("./services/EditCustomerState")
var EditCustomerCountry = require("./services/EditCustomerCountry")
var EditNickName = require("./services/EditNickName")
var EditCustomerEmail = require("./services/EditCustomerEmail")
var EditCustomerNumber = require("./services/EditCustomerNumber")
var EditDishName = require("./services/EditDishName")
var EditIngredients = require("./services/EditIngredients")
var EditPrice = require("./services/EditPrice")
var EditDishDescription = require("./services/EditDishDescription")
var EditCategory = require("./services/EditCategory")
var UploadImg = require("./services/UploadImg")
var UploadDishesImg = require("./services/UploadDishesImg")
var EditCustomerPhoto = require("./services/EditCustomerPhoto")

const {mongoURI} = require("./utils/config");

// var Books = require('./services/books.js');



function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);

        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });

    });
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 500
};

mongoose.connect(mongoURI,options, (err,res) => {
      if(err){
        console.log("Cannot connect to MongoDB")
        console.log(err)
      }
      else{
      console.log("Connection Successful")
    }
    });
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("RestaurantSignup",RestaurantSignup);
handleTopicRequest("CustomerSignup",CustomerSignup);
handleTopicRequest("RestaurantLogin",RestaurantLogin);
handleTopicRequest("CustomerLogin",CustomerLogin);
handleTopicRequest("RestaurantLanding",RestaurantLanding);
handleTopicRequest("EditLocation",EditLocation);
handleTopicRequest("EditDescription",EditDescription);
handleTopicRequest("EditContact",EditContact);
handleTopicRequest("RestaurantDisplay",RestaurantDisplay);
handleTopicRequest("CustomerPage",CustomerPage);
handleTopicRequest("EditCustomerNameInCustomerSignUp",EditCustomerNameInCustomerSignUp);
handleTopicRequest("EditCustomerDOB",EditCustomerDOB);
handleTopicRequest("EditCustomerCity",EditCustomerCity);
handleTopicRequest("AddDishes",AddDishes);
handleTopicRequest("Dishes",Dishes);
handleTopicRequest("Favorites",Favorites);
handleTopicRequest("GetFavorites",GetFavorites);
handleTopicRequest("CustomerRestaurantLanding",RestaurantLanding);
handleTopicRequest("CustomerDishes",Dishes);
handleTopicRequest("AddtoCart",AddtoCart)
handleTopicRequest("DeleteCart",DeleteCart)
handleTopicRequest("AddtoCartModal",AddtoCartModal)
handleTopicRequest("RemoveFromCart",RemoveFromCart)
handleTopicRequest("GetOrder",GetOrder)
handleTopicRequest("OldLocation",OldLocation)
handleTopicRequest("NewLocation",NewLocation);
handleTopicRequest("GetLocation",GetLocation);
handleTopicRequest("DeliveryStatus",DeliveryStatus);
handleTopicRequest("CompleteOrder",CompleteOrder)
handleTopicRequest("CustomerFilter",CustomerFilter)
handleTopicRequest("Reciept",Reciept);
handleTopicRequest("CancelNewOrderCustomer",CancelNewOrderCustomer)
handleTopicRequest("CartFilter",CartFilter)
handleTopicRequest("AddDeliveryStatus",AddDeliveryStatus)
handleTopicRequest("CustomerProfile",CustomerProfile)
handleTopicRequest("EditTimings",EditTimings)
handleTopicRequest("EditName",EditName)
handleTopicRequest("EditNameinFav",EditNameinFav)
handleTopicRequest("EditNameCart",EditNameCart)
handleTopicRequest("EditNameDishes",EditNameDishes)
handleTopicRequest("EditCustomerState",EditCustomerState)
handleTopicRequest("EditCustomerCountry",EditCustomerCountry)
handleTopicRequest("EditNickName",EditNickName)
handleTopicRequest("EditCustomerEmail",EditCustomerEmail)
handleTopicRequest("EditCustomerNumber",EditCustomerNumber)
handleTopicRequest("EditDishName",EditDishName)
handleTopicRequest("EditIngredients",EditIngredients)
handleTopicRequest("EditPrice",EditPrice)
handleTopicRequest("EditDishDescription",EditDishDescription)
handleTopicRequest("EditCategory",EditCategory)
handleTopicRequest("UploadImg",UploadImg)
handleTopicRequest("UploadDishesImg",UploadDishesImg)
handleTopicRequest("EditCustomerPhoto",EditCustomerPhoto)
