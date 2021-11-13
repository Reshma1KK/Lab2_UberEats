import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form.jsx";
import CustomerDashboard from "./CustomerDashboard.jsx";
import CustomerDishes from "./CustomerDishes.jsx";
import NavbarAddToCart from "./NavbarAddToCart.jsx"

function CustomerRestaurant (){

const [cartItems,setCartItems]= useState([]);

    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    return (
        <div className="conatiner-fluid">
        <NavbarAddToCart />
        <div className="dash">
        <CustomerDashboard />
        </div>
        <div>
        <CustomerDishes cartItems={cartItems}/>
        </div>
        </div>

        )
      }


export default CustomerRestaurant;
