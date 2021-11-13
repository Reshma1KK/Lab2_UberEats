import React from "react";
import Profile from "./Profile.jsx";
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"


function CustomerPage(){
  return(
    <div>
    <NavbarAddToCart />
    <div>
    <Profile />
    </div>
    </div>
  )
}

export default CustomerPage;
