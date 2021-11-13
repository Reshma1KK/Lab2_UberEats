import React from 'react'
import AddtoCart from "../AddtoCart/AddtoCart.jsx"
// import image from "./addtocart.jpeg"

import "./Modal.css"
var getTotal ={};
  var sum=0;
export const Modal = ({closeModal}) => {


  const OrderFood = () => {

    getTotal= JSON.parse(localStorage.getItem("newPrice"));
    console.log("getTotal",getTotal)
      Object.values(getTotal).forEach(val => {
        sum+=val;
        console.log("sum",sum)
        console.log("val",val)
      })


    localStorage.setItem("total",sum)
    window.open("/OrderFood","_self");
  }

    return(
      <>
      <div className="modalBackground" >
      <div className="modalContainer" style={{backgroundColor:"black",color:"white"}}>
        <div className="titleCloseBtn">
        <button type="button" onClick={()=>{closeModal(false)}} style={{color:"white"}}>x</button>
        </div>
        <div className="title">
        <h5 style={{color:"white"}}>Your Shopping Cart</h5>
        </div>
        <div className="body">
        <AddtoCart />
        </div>
        <div className="footer" style={{color:"white"}}>
        <button type="button" id="cancelBtn" className="btn btn-success" style={{borderRadius:"50px",fontSize:"0.8rem"}} onClick={()=>{closeModal(false)}}>Cancel</button>
        <button type="button" className="btn btn-success btn-md" style={{borderRadius:"50px",fontSize:"0.8rem"}} onClick={OrderFood}>Checkout</button>
        </div>
        </div>
      </div>

      </>
    )
  };
  //   {showModal ? (
  //     <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor:"#32502E"}} >
  //     <div showModal={showModal}>
  //     <div className="modal-dialog" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id="exampleModalLabel">Ready to Order?</h5>
  //           <button type="button" className="close btn-success" data-dismiss="modal-all" aria-label="Close" style={{width:"25px",height:"25px"}} onClick={()=>setShowModal(prev=> !prev)}>
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //         <AddtoCart />
  //           <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={OrderFood}>Go to checkout</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   ) : null}
