import React from "react";
import image from "../img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function Home() {

  return (

    <div className="container-fluid">
    <img className="home-img" src={image} alt="food"/>
    <div className="row">
    <div className="col-md-10 col-lg-10 home-bar">
    <h1 className="heading-home home">Uber <span className="heading-eats">Eats</span></h1>
    </div>
    <div className="col-md-2 col-lg-2 home-bar">
    <Link to="./CustomerLogin">
    <button type="button" class="home btn btn-dark">Sign In</button>
    </Link>
    </div>
    </div>
    <div className="row">
    <div className="col-md col-lg home-bar">
      <h3 className="para-home home">We've got your cravings covered!</h3>
    </div>
    </div>
    </div>

  );
}

export default Home;
