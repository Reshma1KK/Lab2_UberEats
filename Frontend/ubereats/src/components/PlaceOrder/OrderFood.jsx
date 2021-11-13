import React,{useState} from 'react'
import "./OrderFood.css"
import Axios from "axios"
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"
import AddtoCartCustomer from "./AddtoCartCustomer.jsx"
import {Row,Col} from "react-bootstrap";
import {ModalAddress} from "../CustomComponents/ModalAddress.js"
import DeliveryTakeAway from "./DeliveryTakeAway.jsx"

const totalVal = localStorage.getItem("total");

function OrderFood({total}){


    const [showModal,setShowModal]=useState(false);
    const [instructions, setInstructions]= useState("");

    const showAddress = () => {
      setShowModal(prev=> !prev);
    }

    const currentOrder=false;
    const name = JSON.parse(localStorage["user"])["name"];
    const restaurantName=localStorage.getItem("cartVal");
    const orderStatus="New Order";

    var currentdate = new Date();
    var date = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds() ;


              var d = new Date();
              const temp = d.getMilliseconds();



    // var d = new Date(); // for now
    //   d.getHours(); // => 9
    //   d.getMinutes(); // =>  30
    //   d.getSeconds();
    //   d.getMilliseconds(); // => 51
console.log("currentOrder",currentOrder)
console.log("name",name)
console.log("date",date)
console.log("restaurantName",restaurantName)
console.log("orderStatus",orderStatus)
console.log("temp",temp)
console.log("instructions",instructions)

    const OrderPlaced = () => {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
      Axios.put("http://13.56.184.154:3001/CompleteOrder",{
        restaurant_name:restaurantName,
        customer_name:name,
        current_order:currentOrder,
        date:date,
        order_status:"New Order",
        temp:temp,
        total:totalVal,
        spl_instructions:instructions,
        total_qty:localStorage.getItem("total_qty"),
      }).then(response =>{
        console.log("Added to DB!");
      }).catch(err =>{
        console.log(err);
      })
      localStorage.setItem("FinalCartVal","total");
      localStorage.removeItem("total");
      localStorage.setItem("cartVal","");
      alert("Order Placed Successfully!")
      window.open("/OrderFoodSuccess","_self");
    }

    return (
    <div style={{marginTop:"10%",backgroundColor:"#D8E3E7"}}>
    <NavbarAddToCart />
    <Row>
    <Col>
    <div className="container-fluid mt-5 mb-5">
    <div className="d-flex justify-content-center row w-100">
    <div className="col-md-8">
    <div className="p-2">
    <h2 style={{textAlign:"center", fontFamily:"Postmates", height:"40px",lineHeight:"10px"}}>Shopping Cart</h2>
    </div>
    </div>
    </div>
    </div>
    <div className="container-fluid">
    <div className="row w-100">
    <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
     Id
    </Col>
    <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
     Name of item
     </Col>
    <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
     Price
    </Col>
    <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
     Qty
    </Col>
    </div>
    <hr />
    </div>
    <div className="container" style={{backgroundColor:"#D8E3E7", marginTop:"0px"}}>
    <AddtoCartCustomer />
    </div>
    </Col>
    <Col style={{padding:"50px",backgroundColor:"#E6E6E6"}} className="container-fluid">
    <button type="button" className="btn btn-dark" onClick={showAddress}>Location 📍</button>
    <ModalAddress showModal={showModal} setShowModal={setShowModal} />
    <DeliveryTakeAway />
    <input type="text" className="form-control" id="floatingInputValue" placeholder="eg: No Cutlery Needed" style={{width:"90%", paddingTop:"10px",paddingBottom:"10px"}}
    onChange = {
      (e) => {
        setInstructions(e.target.value);
      }
    }
    />
    <label for="floatingInputValue"> Special Instructions</label>
    <div className="d-flex flex-row justify-content-center mt-3 p-2 rounded container">TOTAL:{localStorage.getItem("total")}$</div>
    <div className="justify-content-center rounded"><button className="btn btn-success btn-block btn-lg pay-button" type="button" style={{width:"90%", paddingTop:"10px",paddingBottom:"10px"}} onClick={OrderPlaced}>Place Order</button></div>
    </Col>
    </Row>
    </div>
    );
}

export default OrderFood
