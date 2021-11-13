import React,{useState} from 'react';
import "../Customer/Navbar.css"
import CustomerDish from "../CustomerRestaurant/CustomerDish.js"
import image from "../AddtoCart/grocery-cart.png"
import {Modal} from "../CustomComponents/Modal.jsx"
import {Row,Col} from "react-bootstrap";


function NavBar() {



  const [showModal,setShowModal]=useState(false);

  // const showPopUp = () => {
  //   setShowModal(prev=> !prev);
  // }


  return(
    <div className="restaurant-NavBar" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>
      <h1 className="heading-home home restuarnt">Uber <span className="heading-eats restuarnt">Eats</span></h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/PastOrders">Past orders</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/CustomerLandingPage">Looking for food?</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/CustomerPage">{JSON.parse(localStorage.getItem("user"))["name"]}<span style={{color:"green"}}> ,View Account</span></a>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-dark openModalBtn" style={{backgroundColor:"black"}} onClick={()=>{setShowModal(true)}}><span><img src={image} alt="" style={{width:"20px", color:"#fff"}}/></span>Cart</button>
        {showModal && <Modal closeModal={setShowModal}/>}
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/" onClick={()=>{localStorage.clear();}}>Logout</a>
        </li>
      </ul>
    </div>
  )


}

export default NavBar;
