
import React,{useState,useEffect,Fragment} from 'react';
import Axios from "axios";
import {Col} from "react-bootstrap";
import Restaurant from "./RestaurantComponents.js"
import "./Filter.css";


function Filter() {


const [restaurants,getRestuarants]=useState([]);

const[deliveryIsChecked,setDeliveryIsChecked] = useState(false);
const[takeAwayIsChecked,setTakeAwayIsChecked] = useState(false);

const[vegIsChecked,setVegIsChecked] = useState(false);
const[nonVegIsChecked,setNonVegIsChecked] = useState(false);
const[veganIsChecked,setVeganIsChecked] = useState(false);


  useEffect(() => {
    getAllRestaurants();
  },[]);

  const getAllRestaurants = () =>{
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
    Axios.get("http://13.56.184.154:3001/RestaurantDisplay")
    .then((response) => {
      const AllRestuarntData=response.data.data.data;
      getRestuarants(AllRestuarntData);
    })
    .catch(error =>
      console.error(error));
  }


    return (
        <div style={{marginTop:"10%", fontSize:"1rem"}}>
        <div>
        <div className="container" style={{marginTop:"0px", fontSize:"1rem"}}>
        <div className="row">

          <div className="col-md-8">
            <h2 className="grid-title"><i className="fa fa-filter"></i> Filters</h2>
            <hr />

            <h4 style={{marginTop:"0px", fontSize:"1rem",fontFamily:"Postmates", fontWeight:"bold"}}>Type of delivery:</h4>
            <div className="checkbox">
              <label>
              <input
              type="checkbox"
              className="icheck"
              name="deliveryType"
              checked={deliveryIsChecked}
              value="delivery"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setDeliveryIsChecked(e.target.checked);
                }
              }
              />
              Delivery
              </label>
            </div>
            <div className="checkbox1">
              <label ><input
              type="checkbox"
               className="icheck"
               name="deliveryType"
               checked={takeAwayIsChecked}
               value="takeAway"
               id="check2"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setTakeAwayIsChecked(e.target.checked);
                }
              }
              />
              Take Away
              </label>
            </div>
            <div className="padding">
            </div>


              <h4 style={{marginTop:"0px", fontSize:"1rem", fontFamily:"Postmates", fontWeight:"bold"}}>Type of Food:</h4>
            <div className="checkbox2">
              <label>
              <input
              type="checkbox"
              className="icheck"
              value="Vegan"
              checked={veganIsChecked}
              onChange={
                (e) => {
                  setVeganIsChecked(e.target.checked);
                }
              }
              /> Vegan
              </label>
            </div>

            <div className="checkbox">
              <label>
              <input
              type="checkbox"
              className="icheck"
              value="Veg"
              checked={vegIsChecked}
              onChange={
                (e) => {
                  setVegIsChecked(e.target.checked);
                }
              }
              />
              Veg
              </label>
            </div>

            <div class="checkbox">
              <label>
              <input
              type="checkbox"
              className="icheck"
              value="NonVeg"
              checked={nonVegIsChecked}
              onChange={
                (e) => {
                  setNonVegIsChecked(e.target.checked);
                }
              }
              />
              Non Veg
              </label>
            </div>

            <div className="padding">
            </div>
        </div>
        </div>
        </div>
         </div>
         {restaurants.filter(function(restaurant) {
           console.log(`restaurant["type_of_delivery"]`,restaurant["type_of_delivery"]);
        if(deliveryIsChecked==="" && takeAwayIsChecked===""){
          return false;
        }
        else if((((restaurant["type_of_delivery"].toLowerCase()).includes("Delivery".toLowerCase())) && deliveryIsChecked===true)
        || (((restaurant["type_of_delivery"].toLowerCase()).includes("Pick Up".toLowerCase())) && takeAwayIsChecked===true) ||
        (((restaurant["type_of_delivery"].toLowerCase()).includes("PickUp/Delivery".toLowerCase())) && (takeAwayIsChecked===true || deliveryIsChecked===true))) {
        return true;
       }}).map(function(restaurant){
        return(<Fragment key={restaurant.id} >
          <Restaurant restaurant={restaurant} />
          </Fragment>
       )
     })
   }
   {restaurants.filter(function(restaurant) {
     console.log(`restaurant["type_of_food"]`,restaurant["type_of_food"]);

    console.log(JSON.stringify(restaurant));
     if(nonVegIsChecked==="" && veganIsChecked==="" && vegIsChecked===""){
       return false;
     }
     else if((((restaurant["type_of_food"].toLowerCase()).includes("Vegan".toLowerCase())) && veganIsChecked===true)
     || (((restaurant["type_of_food"].toLowerCase()).includes("Non Veg".toLowerCase())) && nonVegIsChecked===true)
     || (!(((restaurant["type_of_food"].toLowerCase()).includes("Non Veg".toLowerCase()))) &&
     (!((restaurant["type_of_food"].toLowerCase()).includes("Vegan".toLowerCase())))
     && vegIsChecked===true)) {
     return true;
    }}).map(function(restaurant){
     return(<Fragment key={restaurant.id} style={{width:"100%"}}>
       <Restaurant restaurant={restaurant} />
       </Fragment>
    )
   })
   }

     </div>
    )
}



export default Filter;
