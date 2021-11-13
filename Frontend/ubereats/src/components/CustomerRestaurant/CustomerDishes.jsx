import React, {Fragment,useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import CustomerDish from "./CustomerDish.js";
import { connect } from "react-redux";
import { listCustomerDishes } from "../../actions/dishActions.js"
import Loader from "../CustomComponents/Loader.js"
import Message from "../CustomComponents/Message.js"

function CustomerDishes() {

  const dispatch = useDispatch();

  const customerDishesList = useSelector (state => state.customerDishesList)
  const { loading, error, customerDishes } = customerDishesList

    useEffect(() => {
      dispatch(listCustomerDishes())
    },[dispatch]);

      return(
        <Fragment>
         <Row>
         <hr />
         <h3 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"50px"}}>Menu</h3>
         {loading ?  <Loader />  : error ?  <Message variant="danger">{error}</Message> :
         (
           <>
           <hr />
         {customerDishes.map(function(dish){
           return(<Col sm={12} md={6} lg={4} key={dish._id}>
             <CustomerDish dish={dish} />
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




export default CustomerDishes;
