import React,{useState} from "react";
import Axios from "axios";


function Restaurant({restaurant}){

  // if((restaurant.location).includes(JSON.parse(localStorage.getItem("user"))[0]["city"])){
  const[res,setRes]=useState("");

  // let btnHeart = document.querySelector("#heart");
  // btnHeart.addEventListener("click", () => btnHeart.style.color="red");

  var fav = false;
 const [favorite,setFavorite]=useState([]);

const name=JSON.parse(localStorage["user"])["name"];
const restaurantName=restaurant.restaurantName;
const restaurantLocation=restaurant.location;

function addToFavorites(name,location,id) {
  Axios.defaults.headers.common.authorization=localStorage.getItem("token");
  setFavorite([...favorite,restaurant]);
  Axios.post("http://13.56.184.154:3001/Favorites",{
    customer_id:JSON.parse(localStorage.getItem("user"))["_id"],
    restaurant_name:name,
    restaurant_location:location,
    restaurant_id:id,
  })
  alert("Restuarant Added as Favorite")
}

  function getRestaurantLanding(id,name){
    localStorage.setItem("resName",name)
    localStorage.setItem("resToOpen",id);
    window.open("/CustomerRestaurant","_self");

  };
          console.log("res[_id]",res["_id"])
  return(
    <div className="card restaurant-style border-0" style={{width:"45%",boxShadowTop: "0px",boxShadowBottom:"0px",boxShadowTop:"5px", color:"#fff"}}>
      <img src={restaurant["picture"]} className="card-img-top" alt="dish-img" style={{width:"400px",height:"200px"}} />
      <button id="heart" type="button" style={{width:"30px",backgroundColor:"white",border:"none"}} onClick={()=>{addToFavorites(restaurant["restaurantName"],restaurant["location"],restaurant["_id"])}}>
      {(fav === false) ?
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="grey" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
        </path>
        </svg>
      :
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="red" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
      </path>
      </svg>}
      </button>
        <div className="card-footer" style={{backgroundColor:"black",textAlign:"center"}}>
          <button type="button" className="btn btn-link" onClick={()=>{getRestaurantLanding(restaurant["_id"],restaurant["restaurantName"])}} style={{color:"white",textDecoration:"none",padding:"0"}}><h5 className="card-title" style={{backgroundColor:"black"}}>{`${restaurant["restaurantName"]}`}</h5></button>
        </div>
    </div>
  )
}
//   return(null)
// }


export default Restaurant;
