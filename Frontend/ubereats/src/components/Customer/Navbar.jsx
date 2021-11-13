import React from 'react';
import "./Navbar.css"

function NavBar() {



  return(
    <div className="restaurant-NavBar" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>
      <h1 className="heading-home home restuarnt">Uber <span className="heading-eats restuarnt">Eats</span></h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://13.56.184.154:3000/CustomerLandingPage">Looking for food?</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://13.56.184.154:3000/CustomerPage">{localStorage.getItem("customerName")}<span style={{color:"green"}}> ,View Account</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://13.56.184.154:3000/" onClick={()=>{localStorage.clear();}}>LogOut</a>
        </li>
      </ul>
    </div>
  )


}

export default NavBar;
