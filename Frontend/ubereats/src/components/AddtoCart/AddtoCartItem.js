import React,{ Fragment,useState } from 'react'
import  "../AddtoCart/AddtoCart.css";
import {Col} from "react-bootstrap";
import Axios from "axios";



var cartItem_counter={};
const newVal={};

// cart.current_order === 1 ? getCartItems(cart) : ""


function AddtoCartItem({cart,removeItem,cartItemsPresent}) {


const [cartItems,getCartItems]=useState([]);
const [counter,setCounter] = useState(1);
const [newPrice,setNewPrice]=useState(cart.price);

  console.log("cartItemsPresent",cartItemsPresent)

const increment=()=>{
  setCounter(counter+1);
  setNewPrice(cart.price* (counter + 1));
  console.log("counterIN",counter)
  cartItem_counter[cart.dish_name]=counter+1;
    removeItem(cartItemsPresent);
}

const decrement=()=>{
  setCounter(counter-1);
  setNewPrice(cart.price * (counter-1));
  console.log("counterDEC",counter);
  cartItem_counter[cart.dish_name]=counter-1;
  removeItem(cartItemsPresent);
}

const removeItemFromCart = () =>{
  Axios.post("http://13.56.184.154:3001/RemoveFromCart",{
   _id:localStorage.getItem("DeletedDish"),
 })
 const newList = cartItemsPresent.filter((cart) =>cart._id!=localStorage.getItem("DeletedDish"));
 cartItemsPresent=newList;
 removeItem(cartItemsPresent);
 localStorage.setItem("deletedDishName",cart.dish_name)
 delete newVal[cart.dish_name];
localStorage.setItem("newPrice",JSON.stringify(newVal))
delete cartItem_counter[cart.dish_name];
localStorage.setItem("counter",JSON.stringify(cartItem_counter))
setNewPrice(newPrice)
setCounter(1)
};



// JSON.parse(localStorage.getItem("counter"))[cart.dish_name])

if(cart.current_order === true){
  cartItem_counter[cart.dish_name]=counter;
  return(
    <div className="container-fluid" style={{border:"white"}}>
      <div className="row">
        <div className="col-sm">
          <h5 style={{color:"white"}}>{cart.dish_name}</h5>
        </div>
        <div className="col-sm">
          <h5 style={{color:"white"}}>{newPrice}$</h5>
          <p style={{color:"black"}}>{newVal[cart.dish_name]=newPrice}</p>
          {localStorage.setItem("newPrice",JSON.stringify(newVal))}
        </div>
        <div className="col-sm">
          <h5 style={{color:"white"}}>x{counter}</h5>
          {localStorage.setItem("counter",JSON.stringify(cartItem_counter))}
        </div>
        <div className="col-sm">
        <button type="button" className="btn btn-outline-success btn-sm" style={{borderRadius:"4px",width:"0.1rem",fontSize:"20px"}} onClick={()=>{decrement(cart.id,cart.price)}}>-</button>
        <button type="button" className="btn btn-outline-success btn-sm" style={{borderRadius:"4px",width:"0.1rem",fontSize:"20px"}} onClick={()=>{increment(cart.id,cart.price)}}>+</button>
        <button type="button" className="btn btn-danger btn-sm" onClick={()=>{removeItemFromCart(localStorage.setItem("DeletedDish",cart._id),cart.dish_name,cart.price)}} style={{borderRadius:"4px",margin:"2px"}}>Remove</button>
        </div>
      </div>
    </div>
  )
}

return ("")

}


export default AddtoCartItem;
