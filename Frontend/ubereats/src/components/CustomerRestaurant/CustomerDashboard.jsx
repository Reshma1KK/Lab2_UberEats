import React, {Fragment,useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerForm from "./CustomerForm.js";
import { listRestaurantDetails } from "../../actions/dishActions.js"
import Loader from "../CustomComponents/Loader.js"
import Message from "../CustomComponents/Message.js"
import {Row,Col} from "react-bootstrap";

function CustomerDashboard(){

const dispatch = useDispatch();

const restaurantDetails = useSelector (state => state.restaurantDetails)
const { loading, error, restaurants } = restaurantDetails

  useEffect(() => {
    dispatch(listRestaurantDetails())
  },[dispatch]);

  console.log("restaurants",restaurants)

  return(

  <Fragment>
   <Row>
   {loading ?  <Loader />  : error ?  <Message variant="danger">{error}</Message> :
   (
     <>
   {restaurants.map(function(dash){
     return(<Col sm={12} md={6} lg={4} key={dash._id}>
       <CustomerForm dash={dash} />
     </Col>
   )
   })}
   </>
 )
 }

  </Row>
  </Fragment>

  )
}




export default CustomerDashboard;
