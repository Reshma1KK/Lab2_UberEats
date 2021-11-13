import React,{useState } from 'react'
import {useHistory} from "react-router";
import {Form} from "react-bootstrap";
// import { useSpring, animated } from 'react-spring';
import Axios from "axios";
import  "../AddtoCart/AddtoCart.css";
// import "../CustomComponents/Modal.css"
import ModalDialogue from "../CustomComponents/ModalDialogue.jsx"


function CustomerDish({dish}) {


const history = useHistory();
const [showModal,setShowModal]=useState(true);
const[myDish,setMyDish]=useState([]);
const[qty,setQty] = useState(1)
 const[cart,setCart]=useState([]);
 const customerName = JSON.parse(localStorage["user"])["name"];
 const dishName=dish.dish_name;
 const restaurantName=dish.res_name;
 const price=dish.dish_price;
 const dishCategory=dish.dish_category;
 const currentOrder=1;


 const increment=()=>{
   setQty(qty+1);
 }

 const decrement=()=>{
   setQty(qty-1);
 }



  const addToCart = (dish,id) => {
    console.log(dish)
    if((localStorage.getItem("cartVal"))===""){
        console.log("setting here")
        localStorage.setItem("cartVal",localStorage.getItem("resName"));
        setCart([...cart,dish]);
        Axios.post("http://13.56.184.154:3001/AddtoCart",{
          customerName:customerName,
          dishName:dishName,
          restaurantName:restaurantName,
          price:price,
          dishCategory:dishCategory,
          currentOrder:currentOrder,
          dish_id:id,
          restaurant_id:localStorage.getItem("resToOpen"),
          customer_id:JSON.parse(localStorage.getItem("user"))["_id"],
          qty:qty,
        })
          localStorage.setItem("DishFrom",dish.res_name)
          alert("Items added to shopping Cart")
      }
    else{
      if(localStorage.getItem("cartVal")!=localStorage.getItem("resName")){
        console.log("or here")
        console.log("cartVal",localStorage.getItem("cartVal"));
        console.log("res",localStorage.getItem("res"))
        history.push("/ModalDialogue");
      }
      else{
          setCart([...cart,dish]);
          Axios.post("http://13.56.184.154:3001/AddtoCart",{
            customerName:customerName,
            dishName:dishName,
            restaurantName:restaurantName,
            price:price,
            dishCategory:dishCategory,
            currentOrder:currentOrder,
            dish_id:id,
            restaurant_id:localStorage.getItem("resToOpen"),
            customer_id:JSON.parse(localStorage.getItem("user"))["_id"],
            qty:qty,
          })
            alert("Items added to shopping Cart")
        }
      }
    }
  return(

    <div>
      <div className="card mb-3" style={{width:"100%",height:"50%", fontFamily:"Postmates"}}>
      <div className="row g-0">
      <div className="col-md-4">
      <img src={dish.dish_img} className="img-fluid rounded-start" alt="dish-img" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{`${dish.dish_name}`}</h5>
        <h6 className="card-text">{`${dish.dish_ingredients}`}</h6>
        <h6 className="card-text">{`${dish.dish_description}`}</h6>
        <h6 className="card-text">{`${dish.dish_category}`}</h6>
        <h6 className="card-text"><small className="text-muted">{`${dish.dish_price}`}$</small></h6>
        <button type="button" className="btn btn-outline-secondary btn-sm" style={{borderRadius:"100%",width:"0.1rem",fontSize:"20px"}} onClick={()=>{decrement(dish._id,dish.price)}}>-</button>
        {qty}
        <button type="button" className="btn btn-outline-secondary btn-sm" style={{borderRadius:"100%",width:"0.1rem",fontSize:"20px"}} onClick={()=>{increment(dish._id,dish.price)}}>+</button>
        <div style={{padding:"10px"}}>
        <button type="button" className="btn btn-success btn-md" onClick={()=>{
          addToCart(dish,dish._id)
        }}>Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default CustomerDish;
