import React from 'react';


function NavBar() {

  return(
    <div className="restaurant-NavBar" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>
      <h1 className="heading-home home restuarnt">Uber <span className="heading-eats restuarnt">Eats</span> Business</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/Edit">Edit Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/OrdersPage">Orders</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/AddDishes">Add Dishes</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="http://localhost:3000/RestaurantLanding">Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/" onClick={()=>{localStorage.clear();}}>Logout</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
