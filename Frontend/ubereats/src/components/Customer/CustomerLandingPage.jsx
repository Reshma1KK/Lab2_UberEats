import React from 'react'
import RestaurantDisplay from "./RestaurantDisplay.jsx"
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"

function CustomerLandingPage(){
  return (
      <div className="container-fluid" style={{padding:0}}>
      <NavbarAddToCart />
      <RestaurantDisplay />
      </div>
  )

}

export default CustomerLandingPage;
