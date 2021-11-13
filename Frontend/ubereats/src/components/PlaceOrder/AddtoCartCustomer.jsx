import React,{useState,useEffect,Fragment} from 'react'
import Axios from "axios"
import image from "../CustomComponents/addtocart.jpeg"
import {Row,Col} from "react-bootstrap";
import Navbar from "../Customer/Navbar.jsx"
import CustomerDish from "../CustomerRestaurant/CustomerDish.js";
import AddtoCartItemOrderFood from "./AddtoCartItemOrderFood.js";

// import "./Modal.css"

function AddtoCart (){

  const[cartItems,getCartItems]=useState([]);


  useEffect(() => {
    getAllCartItems();
  },[]);



    const getAllCartItems = () => {
      Axios.defaults.headers.common.authorization = localStorage.getItem('token');
      Axios.post("http://localhost:3001/GetOrder",{
        current_order:true
      })
      .then((response) =>{
        console.log("Inside Cart");
        const cartData = response.data.cartItems;
        console.log(cartData);
        getCartItems(cartData);
      }).catch(error => {
        console.error(error);
      });
    };


return(
        <Fragment>
          <Row>
          </Row>
           <Row>
             {cartItems.filter(function(cart) {
               return true;
             }).map(function(cart){
               return(<div className="container-fluid" key={cart.id}>
                 <AddtoCartItemOrderFood cart={cart} />
                 </div>
             )
             })}
          </Row>
      </Fragment>
    )
    }
export default AddtoCart;
