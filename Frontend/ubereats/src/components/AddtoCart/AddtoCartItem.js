import React,{ Fragment,useState } from 'react'
import {Form} from "react-bootstrap"
import  "../AddtoCart/AddtoCart.css";
import {Col} from "react-bootstrap";
import Axios from "axios";



var cartItem_counter={};
const newVal={};

// cart.current_order === 1 ? getCartItems(cart) : ""


function AddtoCartItem({cart,removeItem,cartItemsPresent}) {

const [cartItems,getCartItems]=useState([]);


  console.log("cartItemsPresent",cartItemsPresent)





const removeItemFromCart = () =>{
  Axios.post("http://13.56.184.154:3001/RemoveFromCart",{
   _id:localStorage.getItem("DeletedDish"),
 })
 const newList = cartItemsPresent.filter((cart) =>cart._id!=localStorage.getItem("DeletedDish"));
 cartItemsPresent=newList;
 removeItem(cartItemsPresent);
 localStorage.setItem("deletedDishName",cart.dish_name)
 delete newVal[cart.dish_name];

};



// const getTotal = () =>{
//   console.log("i am total_final",total_final);
//   total_final=total_final+JSON.parse(localStorage.getItem("counter"))[cart.dish_name];
//   console.log("i am newPrice",newPrice);
//   localStorage.setItem("total",total_final);
//   console.log("Liverpool fc final "+ total_final )
// }

// JSON.parse(localStorage.getItem("counter"))[cart.dish_name])

if(cart.current_order === true){
  return(
    <div className="container-fluid" style={{border:"white"}}>
      <div className="row">
        <div className="col-sm">
          <h5 style={{color:"white"}}>{cart.dish_name}</h5>
        </div>
        <div className="col-sm">
          <h5 style={{color:"white"}}>{cart.price*cart.qty}$</h5>
        </div>
        <div className="col-sm">
        <button type="button" className="btn btn-danger btn-sm" onClick={()=>{removeItemFromCart(localStorage.setItem("DeletedDish",cart._id),cart.dish_name,cart.price)}} style={{borderRadius:"4px"}}>Remove</button>
        </div>
      </div>
    </div>
  )
}

return ("")

}


export default AddtoCartItem;
