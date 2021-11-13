import React,{useState,useEffect} from 'react';
import Axios from "axios";
import {Col} from "react-bootstrap";
import OrderFilter from "../RestaurantOrderPage/OrderFilter.js"
// import "../CustomComponents/Filter.css";


function Filter() {


  const [orders,getOrders]=useState([]);

const[newOrderIsChecked,setNewOrderIsChecked] = useState(false);
const[deleveredIsChecked,setDeliveredIsChecked] = useState(false);
const[cancelledOrderIsChecked,setCancelledOrderIsChecked] = useState(false);



    useEffect(() => {
      getAllOrders();
    },[]);

const getAllOrders = () =>{
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.get("http://13.56.184.154:3001/CartFilter")
    .then((response) => {
      const allOrders=response.data.data;
      console.log(allOrders)
        getOrders(allOrders);
    })
    .catch(error =>
      console.error(error));
  }


    return (

      <>
          <div className="container-fluid" style={{fontFamily:"Postmates",fontWeight:"bold",textAlign:"justify",margin:"3%",backgroundColor:"#F0E5CF",color:"black"}}>
            <h2 style={{marginTop:"50px", fontSize:"1rem",fontFamily:"Postmates", fontWeight:"bold",color:"black"}}>Filters</h2>

            <h4 style={{marginTop:"0px", fontSize:"1rem",fontFamily:"Postmates", fontWeight:"bold",color:"black"}}>Order Status:</h4>
            <div className="checkbox">
              <label><input
              type="checkbox"
              className="icheck"
              name="newOrder"
              checked={newOrderIsChecked}
              value="newOrder"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setNewOrderIsChecked(e.target.checked);
                }
              }
              />
              New Order
              </label>
            </div>
            <div className="checkbox1">
              <label><input
              type="checkbox"
               name="delivery"
               checked={deleveredIsChecked}
               value="delivered"
              onChange={
                (e) => {
                  console.log(e.target.value);
                  setDeliveredIsChecked(e.target.checked);
                }
              }
              />
              Delivered
              </label>
            </div>

            <div className="checkbox2">
              <label>
              <input
              type="checkbox"
              value="cancelledOrder"
              checked={cancelledOrderIsChecked}
              onChange={
                (e) => {
                  setCancelledOrderIsChecked(e.target.checked);
                }
              }
              /> Cancelled
              </label>
              </div>
           </div>

         {orders.filter(function(order) {
        if(newOrderIsChecked==="" && deleveredIsChecked==="" && cancelledOrderIsChecked==""){
          return false;
        }
        else if(((((order.order_status||"").toLowerCase()).includes("New Order".toLowerCase())) && newOrderIsChecked===true)
        || ((((order.order_status||"").toLowerCase()).includes("Delivered".toLowerCase())) && deleveredIsChecked===true) ||
        ((((order.order_status||"").toLowerCase()).includes("Cancelled".toLowerCase())) && cancelledOrderIsChecked===true))  {
        return true;
      }}).map(function(order){
           return(<div key={order.id}>
             <OrderFilter order={order} />
            </div>

           )
       })
     }
     </>
    )
}



export default Filter;
