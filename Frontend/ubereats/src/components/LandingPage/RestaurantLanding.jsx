import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form.jsx";
import Dashboard from "./Dashboard.jsx";
import Dishes from "./Dishes.jsx";
import {withRouter} from "react-router-dom";
import NavBar from "./NavBar.jsx"

function RestaurantLanding (){


    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    return (
        <div className="conatiner-fluid">
        <NavBar />
        <div className="dash">
        <Dashboard />
        </div>
        <div>
        <Dishes />
        </div>
        </div>

        )
      }


export default withRouter(RestaurantLanding);
