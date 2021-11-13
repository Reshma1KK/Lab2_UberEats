import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Reciept from "./Reciept.jsx"
import Axios from "axios";
import {Row,Col} from "react-bootstrap"

function CreateReciept({}) {

// (JSON.parse(localStorage.getItem("user"))[0]["name"]) === (order.customer_name) ? getCustomerData(order) : ""

    const [customerData,getCustomerData]=useState([]);

      useEffect(() => {
        getAllCustomerData();
      },[]);

      const getAllCustomerData = () =>{

      Axios.defaults.headers.common.authorization=localStorage.getItem("token");
        Axios.post("http://13.56.184.154:3001/Reciept",{
                  temp:localStorage.getItem("temp")
        })
        .then((response) => {
           // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
             const allCustomerData = response.data.reciept;
                          getCustomerData(allCustomerData);
         }).catch(error =>
          console.error(error)
        )
      }



      return (
        <Fragment>
         <Row>

         {customerData.map(function(order){
           return(<Col sm={12} md={12} lg={12} key={order.id}>
             <Reciept order={order} />
           </Col>
         )
         })}
        </Row>
      </Fragment>
          )



}

export default CreateReciept
