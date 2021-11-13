import React,{useState} from 'react'
import Axios from "axios"
import {Row,Col} from "react-bootstrap";

function DeliveryTakeAway() {

  const[status,setStatus]=useState(null);
  const currentOrder=true;
  const storeStatus = () => {
    Axios.post("http://localhost:3001/DeliveryStatus",{
      status:status,
      currentOrder:currentOrder
    })

  }

    return (
      <>
      <Row style={{margin:"10%"}}>
      <Col>
        <select
        className="form-value"
        name="delivery"
        style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"3rem", fontSize:"1.1rem", width:"200px"}}
        required
        onChange={
          (e)=>{
            setStatus(e.target.value);
          }}
        >
          <option value="select">Select</option>
          <option value="Delivery">Delivery</option>
          <option value="Pickup">Pickup</option>
        </select>
        </Col>
        <Col>
            <button type="button" style={{borderRadius:"100%",backgroundColor:"green"}} onClick={storeStatus}>✔️</button>
        </Col>
          </Row>
        </>
    )
}

export default DeliveryTakeAway;
