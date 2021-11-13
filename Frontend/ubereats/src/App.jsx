import React,{useState} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import CustomerLogin from "./components/Login/CustomerLogin.jsx";
import RestaurantLogin from "./components/Login/RestaurantLogin.jsx";
import CustomerSignup from "./components/Login/CustomerSignup.jsx";
import RestaurantSignup from "./components/Login/RestaurantSignup.jsx";
import RestaurantLanding from "./components/LandingPage/RestaurantLanding.jsx"
import ProtectedRoute from "./components/LandingPage/ProtectedRoute.js";
import Edit from "./components/LandingPage/Edit.jsx"
import AddDishes from "./components/LandingPage/AddDishes.jsx"
import EditDishes from "./components/LandingPage/EditDishes.jsx"
import CustomerLandingPage from "./components/Customer/CustomerLandingPage.jsx"
import CustomerPage from "./components/Customer/CustomerPage.jsx"
import EditCustomerProfile from "./components/Customer/EditCustomerProfile.jsx"
import CustomerRestaurant from "./components/CustomerRestaurant/CustomerRestaurant.jsx"
import AddtoCart from "./components/AddtoCart/AddtoCart.jsx"
import OrderFood from "./components/PlaceOrder/OrderFood.jsx"
import Favorites from "./components/Favorites/Favorites.jsx"
import PastOrders from "./components/PastOrders/PastOrders.jsx"
import OrdersPage from "./components/RestaurantOrderPage/OrdersPage.jsx"
import DisplayProfile from "./components/RestaurantOrderPage/DisplayProfile.jsx"
import ModalDialogue from "./components/CustomComponents/ModalDialogue.jsx"
import OrderFoodSuccess from "./components/PlaceOrder/OrderFoodSuccess.jsx"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CustomerLogin" component={CustomerLogin} />
      <Route path="/RestaurantLogin" component={RestaurantLogin} />
      <Route path="/CustomerSignup" component={CustomerSignup} />
      <Route path="/RestaurantSignup" component={RestaurantSignup} />
        // <Route path="/RestaurantLanding" component={RestaurantLanding} />
      <ProtectedRoute exact path ="/RestaurantLanding" component={RestaurantLanding} isAuthenticated={true} />
      <ProtectedRoute exact path="/Edit" component={Edit} isAuthenticated={true} />
      <ProtectedRoute exact path="/AddDishes" component={AddDishes} isAuthenticated={true}/>
      <ProtectedRoute exact path="/EditDishes" component={EditDishes} isAuthenticated={true}/>
      <ProtectedRoute exact path="/CustomerLandingPage" component={CustomerLandingPage} isAuthenticated={true} />
      <ProtectedRoute exact path="/CustomerPage" component={CustomerPage} isAuthenticated={true}/>
      <ProtectedRoute exact path="/EditCustomerProfile" component={EditCustomerProfile} isAuthenticated={true}/>
      <ProtectedRoute exact path="/CustomerRestaurant" component={CustomerRestaurant} isAuthenticated={true}/>
      <ProtectedRoute exact path="/AddtoCart" component={AddtoCart} isAuthenticated={true}/>
      <ProtectedRoute exact path="/OrderFood" component={OrderFood} isAuthenticated={true}/>
      <ProtectedRoute exact path="/Favorites" component={Favorites} isAuthenticated={true}/>
      <ProtectedRoute exact path="/PastOrders" component={PastOrders} isAuthenticated={true}/>
      <ProtectedRoute exact path="/OrdersPage" component={OrdersPage} isAuthenticated={true}/>
    <ProtectedRoute exact path="/DisplayProfile" component={DisplayProfile} isAuthenticated={true}/>
    <ProtectedRoute exact path="/ModalDialogue" component={ModalDialogue} isAuthenticated={true}/>
    <ProtectedRoute exact path="/OrderFoodSuccess" component={OrderFoodSuccess} isAuthenticated={true}/>
    </Switch>
  </Router>
   </div>
  );
}

export default App;
