import React,{useState} from "react";
import Axios from "axios";


function Favorite({fav}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState([]);

  // let btnHeart = document.querySelector("#heart");
  // btnHeart.addEventListener("click", () => btnHeart.style.color="red");



  function getRestaurantLanding(id){
          localStorage.setItem("resToOpen",id);
          window.open("/CustomerRestaurant","_self");
  };


  return(
      <div className="card restaurant-style" style={{width:"66%"}}>
          <div className="card-body">
            <a href="#" onClick={()=>{getRestaurantLanding(fav.restaurant_id)}} style={{color:"green"}}><h5 className="card-title">{`${fav.restaurant_name}`}</h5></a>
            <h5>{`${fav.restaurant_location}`}</h5>
          </div>
      </div>
    )
  }
//   return(null)
// }


export default Favorite;
