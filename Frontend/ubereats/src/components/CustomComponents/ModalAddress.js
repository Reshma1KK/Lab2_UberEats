import React,{useState} from 'react'
import Axios from "axios"
import DropdownLocation from "./DropdownLocation";


// import "./Modal.css"

export const ModalAddress = ({showModal,setShowModal}) => {

const [location,setLocation]=useState("")
const name = JSON.parse(localStorage["user"])["name"];


    return(
      <>
      {showModal ? (
        <div className="modal-all" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor:"#32502E"}} >
        <div showModal={showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Deliver To</h5>
              <button type="button" className="close btn-success" data-dismiss="modal-all" aria-label="Close" style={{width:"25px",height:"25px"}} onClick={()=>setShowModal(prev=> !prev)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <DropdownLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : null}
      </>
    )
  };


  // <div className="body-modal">
  // <div showModal={showModal}>
  //     <img src={image}
  //     alt="add-to-cart" />
  //     <div className="modal-dialog">
  //         <h3>Ready to Order?</h3>
  //         <button type="button" className="btn btn-success" style={{borderRadius:"50px"}} onClick={CartItems}>Add Item</button>
  //     </div>
  //     <div aria-label="Close Modal" onClick={()=>setShowModal(prev=> !prev)} />
  //     </div>
  //   </div>
