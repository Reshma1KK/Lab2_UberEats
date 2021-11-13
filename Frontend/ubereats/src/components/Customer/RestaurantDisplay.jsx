import React,{useState,useEffect,Fragment} from "react";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Restaurant from "./Restaurant.js"
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "../CustomComponents/SearchBar.jsx"
import Filter from "../CustomComponents/Filter.js"
import Loader from "../CustomComponents/Loader.js"
import Message from "../CustomComponents/Message.js"
import { listRestaurants } from "../../actions/dishActions.js"

function RestaurantDisplay(){

    const [restaurants,getRestuarants]=useState([]);

    const restaurantName=restaurants["restaurantName"];
    const restaurantLocation=restaurants["location"];
    var fav = false;
   const [favorite,setFavorite]=useState([]);

  const name=JSON.parse(localStorage["user"])["name"];
  const dispatch = useDispatch();

  const restaurantsList = useSelector (state => state.restaurantsList)
  const { loading, error, restaurant } = restaurantsList

  useEffect(() => {
    dispatch(listRestaurants())
  },[dispatch]);

  function addToFavorites(name,location,id) {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
    setFavorite([...favorite,restaurants]);
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

    console.log("restaurant available",restaurant)
  return(
    <Fragment>
      <Row className="row">
      <div col className="col-6">
      <Col style={{justifyContent:"left"}}>
      <Filter />
      </Col>
      </div>
      <div col className="col-6">
      <Col style={{justifyContent:"right"}}>
      <SearchBar />
      </Col>
      </div>
      </Row>
      <Row>
        <h3 style={{padding:"3%"}}>Restaurants Near You:</h3>
     {loading ?  <Loader />  : error ?  <Message variant="danger">{error}</Message> :
     (
       <>
        {restaurant.filter(function(res) {
        if (!(res["location"]).includes(JSON.parse(localStorage.getItem("user"))["city"])) {
          return false;
        }
        return true;
      }).map(function(res){
        return(<Col sm={12} md={6} lg={4}>
        <div className="card restaurant-style border-0" style={{width:"66%",boxShadowTop: "0px",boxShadowBottom:"0px",boxShadowTop:"5px", color:"#fff"}}>
          <img src={res["picture"]} className="card-img-top" alt="dish-img" style={{width:"400px",height:"200px"}} />
          <button id="heart" type="button" style={{width:"30px",backgroundColor:"white",border:"none"}} onClick={()=>{addToFavorites(res["restaurantName"],res["location"],res["_id"])}}>
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
          <button type="button" className="btn btn-link" onClick={()=>{getRestaurantLanding(res["_id"],res["restaurantName"])}} style={{color:"white",textDecoration:"none",padding:"0"}}><h5 className="card-title" style={{backgroundColor:"black"}}>{`${res["restaurantName"]}`}</h5></button>
       </div>
            </div>
          </Col>
      )
      })}
    </>
  )
  }
      </Row>
        <Row>
        <h3 style={{padding:"3%"}}>Other Restaurants Open:</h3>
        {loading ?  <Loader />  : error ?  <Message variant="danger">{error}</Message> :
        (
        <>
        {restaurant.map(function(res){
          console.log(res.restaurantName);
        return(<Col sm={12} md={6} lg={4}>
        <div className="card restaurant-style border-0" style={{width:"66%",boxShadowTop: "0px",boxShadowBottom:"0px",boxShadowTop:"5px", color:"#fff"}}>
          <img src={res.picture} className="card-img-top" alt="dish-img" style={{width:"400px",height:"200px"}} />
          <button id="heart" type="button" style={{width:"30px",backgroundColor:"white",border:"none"}} onClick={()=>{addToFavorites(res.restaurantName,res.location,res._id)}}>
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
          <button type="button" className="btn btn-link" onClick={()=>{getRestaurantLanding(res._id,res.restaurantName)}} style={{color:"white",textDecoration:"none",padding:"0"}}><h5 className="card-title" style={{backgroundColor:"black"}}>{`${res.restaurantName}`}</h5></button>
       </div>
        </div>
          </Col>
        )
      })}
      </>
    )
    }
        </Row>
      </Fragment>
);


}

export default RestaurantDisplay;
