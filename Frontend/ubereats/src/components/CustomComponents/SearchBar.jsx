import React,{useState,useEffect,Fragment} from "react";
import "./Searchbar.css";
import {Col} from "react-bootstrap";
import Restaurant from "./RestaurantComponents.js"
import Axios from "axios"
import CustomerDish from "../CustomerRestaurant/CustomerDish.js"

function SearchBar() {

   const [restaurants,getRestuarants]=useState([]);

   const [dishes,getDishes]=useState([]);

    const[searchTerm,setSearchTerm]=useState("");

    console.log(searchTerm);

    useEffect(() => {
      getAllRestaurants();
    },[]);

    useEffect(() => {
      getAllDishes();
    },[]);

  const getAllRestaurants = () =>{
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
    Axios.get("http://localhost:3001/RestaurantDisplay")
    .then((response) => {
      const AllRestuarntData=response.data.data.data;
      getRestuarants(AllRestuarntData);
    })
    .catch(error =>
      console.error(error));
  }

  const getAllDishes = () => {
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    // Axios.get("http://localhost:3001/Dishes.jsx")
    // .then(response => console.log(response))
    // .catch(err => console.log("failed:",err));
    console.log("res_id",JSON.parse(localStorage.getItem("user"))["_id"])
      Axios.post("http://localhost:3001/CustomerDishes")
      .then((response) => {
        console.log("dish name",response.data.dishes)
        console.log("dishes length",response.data.dishes)
        console.log("dishes",response.data.dishes)
        const allDishes=response.data.dishes;
        getDishes(allDishes);
      })
      .catch(error =>
        console.error(error));
  }

  return(
    <div className="container-fluid" style={{marginTop:"0px"}}>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
    <div className="container justify-content-right">
    <div className="row">
        <div className="col-md-12">
            <div className="input-group mb-3">
            <input type="text"
            className="form-control input-text no-outline"
            placeholder="What are you craving for...."
            aria-label="search for food"
            aria-describedby="basic-addon2"
            style={{border: "no border"}}
            onChange={
              (e)=> {
                setSearchTerm(e.target.value);
              }
            }
            />
                <div className="input-group-append">
                <button className="btn btn-outline-success btn-lg" type="button">
                <i className="fa fa-search"></i>
                </button>
            </div>
            </div>
            </div>
            </div>
            </div>
            {restaurants.filter(function(restaurant) {
           if(searchTerm===""){
             return false;
           }
           else if(((restaurant["location"].toLowerCase()).includes(searchTerm.toLowerCase()))
           || ((restaurant["description"].toLowerCase()).includes(searchTerm.toLowerCase()))
           || ((restaurant["restaurantName"].toLowerCase()).includes(searchTerm.toLowerCase()))
         || ((restaurant["restaurantName"].toLowerCase())===localStorage.getItem("SearchedRes"))) {
           return true;
          }}).map(function(restaurant){
           return(<Fragment key={restaurant.id}>
             <Restaurant restaurant={restaurant} />
             </Fragment>
          )
        })
      }
            {dishes.filter(function(dish) {
           if(searchTerm===""){
             return false;
           }
           else if(((dish.dish_name).toLowerCase()).includes(searchTerm.toLowerCase())) {
           return true;
         }}).map(function(dish){
           localStorage.setItem("SearchedRes",dish.res_name)
        })
      }


    </div>

  )
}

export default SearchBar;
