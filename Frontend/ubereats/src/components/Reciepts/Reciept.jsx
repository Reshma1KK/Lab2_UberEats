import React,{useState} from 'react';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";




function Reciept({order}){

  const[errorCancelMsg,setErrorCancelMsg]=useState("");

  const cancelOrder = () =>{
    if(order.order_status==="New Order"){
      Axios.put("http://13.56.184.154:3001/CancelNewOrderCustomer",{
        order_status:"Cancelled",
        temp:order.temp
        })
        setErrorCancelMsg("Order cancelled successfully");
        window.location.reload();
      }
    else if(order.order_status==="Cancelled"){
      setErrorCancelMsg("Order already Cancelled");
    }
    else{
      setErrorCancelMsg("Cannot Cancel Order! Order is being processed by Restaurant");
    }
}

  return(
     <div>
      <div className="container-fluid">
        <div className="card mb-12">
          <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
              <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>Total:{`${order.total}`}$</h5>
                <h5 className="card-title" style={{backgroundColor:"black",color:"white"}}>{`${order.restaurant_name}`}</h5>
                <h5 className="card-title" style={{backgroundColor:"black",color:"white"}}>{`${order.location}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${localStorage.getItem("counter").replace(/[^\w\s]/gi," ")}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${order.order_status}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>{`${order.date}`}</h5>
                <h5 className="card-text" style={{backgroundColor:"black",color:"white"}}>Instruction:{`${order.spl_instructions}`}</h5>
                <button type="button" className="btn btn-danger" style={{borderRadius:"50px",fontSize:"0.6rem"}} onClick={()=>{cancelOrder(order.temp,order.order_status)}}>Cancel Order</button>
                <div>
                  <h5 className='err-msg' style={{backgroundColor:"black",color:"red"}}>{errorCancelMsg}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}

  // <button type="button" className="btn btn-link" onClick={()=>showPopUp(order.restaurant_name)} style={{border:"none"}}>order receipt</button>

export default Reciept;
