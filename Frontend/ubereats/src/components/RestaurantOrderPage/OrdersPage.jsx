import React,{Fragment} from 'react'
import NavBar from "../LandingPage/NavBar.jsx"
import {Row,Col} from "react-bootstrap";
import Orders from "./Orders.jsx"
import Filter from "../CustomComponentsRestaurant/Filter.jsx"


function OrdersPage(){




    return (
      <>
      <NavBar style={{position:"fixed",top:"0px",width:"100%",left:"0px"}} />
      <div className="container-fluid">
      <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px",marginTop:"60px"}}>Orders</h2>
      <hr />
        <div className="row" style={{marginBottom:"5%"}}>
          <Filter />
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col" style={{marginLeft:"10%"}}>
         Customer Name
          </div>
          <div className="col">
          Dishes
          </div>
          <div className="col">
        Type of Delivery Chosen by Customer
          </div>
          <div className="col">
       Order Status
          </div>
        </div>
        </div>
        <div className="row">
        <Orders />
        </div>
      </div>
      </>
    )
}

export default OrdersPage;
