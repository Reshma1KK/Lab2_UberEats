import React, {Fragment,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col} from "react-bootstrap";
import Dish from "./Dish.js";
import {Link} from "react-router-dom";
import { listDishes } from "../../actions/dishActions.js"
import Loader from "../CustomComponents/Loader.js"
import Message from "../CustomComponents/Message.js"

function Dishes() {


  const dispatch = useDispatch();

  const dishList = useSelector (state => state.dishList)
  const { loading, error, dishes } = dishList

    useEffect(() => {
      dispatch(listDishes())
    },[dispatch]);

    console.log("mine",dishes);

      return(

        <Fragment>
         <Row>
         <hr />
         <h3 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"50px"}}>Menu</h3>
         {loading ?  <Loader />  : error ?  <Message variant="danger">{error}</Message> :
         (
           <>
           <hr />
         {dishes.map(function(dish){
           return(<Col sm={12} md={6} lg={4} key={dish._id}>
             <Dish dish={dish} />
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



export default Dishes;
