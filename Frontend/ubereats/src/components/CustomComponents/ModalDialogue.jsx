import React from 'react'
import AddtoCart from "../AddtoCart/AddtoCart.jsx"
import Axios from "axios"
import {useHistory} from "react-router";
import { Redirect } from "react-router-dom"
// import image from "./addtocart.jpeg"

import "./Modal.css"

function ModalDialogue ({closeModal}) {


const goBack = (e) =>{
  e.preventDefault();
  localStorage.setItem("cartVal",localStorage.getItem("DishFrom"))
  window.open("/CustomerRestaurant","_self")
  // history.goBack(+2);
}

const getNewOrder = () =>{
  Axios.delete("http://localhost:3001/DeleteCart")
    localStorage.setItem("cartVal",(localStorage.getItem("resName")));
    history.goBack();
  console.log("Deleted!");
}
const history = useHistory();


    return(
      <>
      <div className="modalBackground" style={{size:"3rem"}}>
      <div className="modalContainer" style={{backgroundColor:"black",color:"white"}}>
        <div className="titleCloseBtn">
        <button type="button" onClick={goBack} style={{color:"white"}}>x</button>
        </div>
        <div className="title">
        <h5 style={{color:"white"}}>Create a New Order?</h5>
        </div>
        <div className="body">
          <h2 style={{color:"white",fontSize:"1rem"}}>Your order contains items from {(localStorage.getItem("cartVal"))}, Do you want to create a new order?</h2>
        </div>
        <div className="footer" style={{color:"white"}}>
          <button type="button" className="btn btn-success btn-sm" style={{borderRadius:"10px",fontSize:"0.7rem",backgroundColor:"red"}} onClick={goBack}>Cancel</button>
        <button type="button" className="btn btn-success btn-sm" style={{borderRadius:"10px",fontSize:"0.7rem"}} onClick={getNewOrder}>Continue</button>
        </div>
        </div>
      </div>

      </>
    )
};
export default ModalDialogue;
