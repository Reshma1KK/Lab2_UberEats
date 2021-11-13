import React,{Fragment} from 'react'
import NavbarAddToCart from "../CustomerRestaurant/NavbarAddToCart.jsx"
import CustomerOrders from "./CustomerOrders.jsx"
import Filter from "./Filter.jsx"

function PastOrders(){
    return (
        <Fragment>
             <NavbarAddToCart />
             <h3 style={{marginTop:"100px",textAlign:"center", fontFamily:"Postmates"}}>Past Orders</h3>
             <hr />
             <Filter />
             <div className="conatiner" style={{textAlign:"right", fontFamily:"Postmates"}}>
             <CustomerOrders />
             </div>
        </Fragment>
    )
}

export default PastOrders;
