import React, {Fragment,useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Order from "./Order.jsx";

function Orders() {


    const [orders,getOrders]=useState([]);

    useEffect(() => {
      getAllOrders();
    },[]);

    const getAllOrders = () => {
      // Axios.get("http://localhost:3001/Dishes.jsx")
      // .then(response => console.log(response))
      // .catch(err => console.log("failed:",err));
        Axios.get("http://localhost:3001/CartFilter")
        .then((response) => {
          const allOrders=response.data.data;
            getOrders(allOrders);
        })
        .catch(error =>
          console.error(`Error:{error}`));
    }

      return(

        <Fragment>
          <Row style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem",paddingTop:"50px"}}>
          {orders.map(function(order){
            return(<div key={order.id}>
              <Order order={order} />
            </div>
          )
          })}
          </Row>
        </Fragment>

     )
    }



export default Orders;
