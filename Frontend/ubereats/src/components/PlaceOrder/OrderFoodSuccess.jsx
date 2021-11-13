import React,{useState} from 'react'
import "./OrderFood.css"
import Axios from "axios"
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"
import AddtoCartCustomer from "./AddtoCartCustomer.jsx"
import {Row,Col} from "react-bootstrap";
import {ModalAddress} from "../CustomComponents/ModalAddress.js"
import DeliveryTakeAway from "./DeliveryTakeAway.jsx"


function OrderFoor({total}){


    return (
    <div style={{marginTop:"10%"}}>
    <NavbarAddToCart />
    <div className="container-fluid mt-5 mb-5">
    <div className="d-flex justify-content-center row w-100">
    <div className="col-md-8">
    <div className="p-2">
    <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>Shopping Cart</h2>
    </div>
    </div>
    </div>
    </div>
    <div className="container-fluid">
    <div className="row w-100">
    <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}} >Order Placed Successfully!</h2>
    </div>
    </div>
    </div>
    );
}

export default OrderFoor
