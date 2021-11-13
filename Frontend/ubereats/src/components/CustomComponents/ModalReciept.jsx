import React,{useState} from 'react'
import Axios from "axios"
import CreateReciept from "../Reciepts/CreateReciept.jsx"
import "./Modal.css"

export const ModalReciept = ({closeModal}) => {



    return(
      <>
      <div className="modalBackground" style={{top:"0"}}>
      <div className="modalContainer" style={{backgroundColor:"black",color:"white"}}>
        <div className="titleCloseBtn">
        <button type="button" onClick={()=>{closeModal(false)}} style={{color:"white"}}>x</button>
        </div>
        <div className="title">
        <h5 style={{color:"white"}}>Reciept</h5>
        </div>
        <div className="body">
        <CreateReciept />
        </div>
        <div className="footer">
          <button type="button" id="cancelBtn" className="btn btn-warning" style={{borderRadius:"50px",fontSize:"0.8rem"}} onClick={()=>{closeModal(false)}}>Close</button>
        </div>
        </div>
      </div>

      </>
    )
  };


//   {showModal ? (
//     <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
//     <div showModal={showModal}>
//     <div className="modal-dialog" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
//           <button type="button" className="close btn-success" data-dismiss="modal-all" aria-label="Close" style={{width:"25px",height:"25px"}} onClick={()=>setShowModal(prev=> !prev)}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//         <CreateReciept />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   ) : null}
