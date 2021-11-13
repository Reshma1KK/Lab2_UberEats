import React,{useState} from 'react'
import {Row,Col} from "react-bootstrap";
import Axios from "axios"

function DeliveryStatus() {

  // JSON.stringify(localStorage.setItem("deliveryStatus",val))

const [deliveryStatus,getDeliveryStatus]=useState([]);

// useEffect(() => {
//     getVal();
// },[]);

const[delivery,setDelivery]=useState(null);

const names=JSON.parse(localStorage.getItem("customers"));

const restaurantName=JSON.parse(localStorage["user"])["restaurantName"];
const customerName=names[0];



const updateCartTable = () => {
    Axios.put("http://localhost:3001/AddDeliveryStatus",{
      delivery:delivery,
      customerName:customerName,
      restaurantName:restaurantName
    })

  // alert("Updated successfully!");
}


    return (
      <>
        <div className="row" style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
        <select
        className="form-value"
        name="delivery"
        style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
        onChange={
          (e)=>{
            setDelivery(e.target.value);
          }}
        >
          <option value="select">Select</option>
          <option value="Order Received">Order Received</option>
          <option value="Preparing">Preparing</option>
          <option value="On the Way">On the Way</option>
          <option value="Delivered">Delivered</option>
          <option value="Pick Up Ready">Pick Up Ready</option>
          <option value="Picked Up">Picked Up</option>
        </select>
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={updateCartTable}>✔️</button>
        </Col>
        </div>
      </>
    )
  // }
  //   return("")
  }

export default DeliveryStatus
