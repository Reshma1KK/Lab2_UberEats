import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./OrderFood.css"
import {Col} from "react-bootstrap";
// var total_final = 0;
//localStorage.setItem("total",0);



function AddtoCartItemOrderFood({cart}) {

  // const [qty,setQty]=useState(1);
const currentOrder=true;

const dishName=cart.dish_name;




// if(cart.current_order.data[0]===1){
//   console.log("Liverpool fc "+ JSON.stringify(cart) )
//   total_final=total_final+cart.price;
// }
// localStorage.setItem("total",total_final);


  // function total(item){
  //   total+=item;
  // }
  // val.forEach(total);



     // const finalTotal=total;
     // localStorage.setItem("total",finalTotal);
     // console.log("Liverpool ",cart);
     //
     // // for(let val of {cart}){
     // //   total = total+val;
     // // }
     //  localStorage.setItem("total",total);
     //
     // // Object.values(cart).forEach(price => {
     // //
     // //   if(cart.current_order.data[0]===1){
     // //     console.log("liverpool" + JSON.stringify(cart));
     // //     total = total+(JSON.parse(cart.price.replace('$','')));
     // //   }
     //
     //  });
     // const finalTotal = total;
      // localStorage.setItem("total",total);

      localStorage.setItem("cartPrice",cart.price);
     if(cart.current_order === true) {

    return (
     <div className="container-fluid">
     <div className="row">
     <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
      ➕
     </Col>
     <Col className="d-flex flex-row justify-content-center mt-3 p-2 rounded">
      {cart.dish_name}
      </Col>
     <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
      {cart.price}$
     </Col>
     <Col className="d-flex flex-row justify-content-center mt-3 p-2  rounded">
    { typeof(JSON.parse(localStorage.getItem("counter"))[cart.dish_name]) === "undefined" ? "x" + 1 : "x" +JSON.parse(localStorage.getItem("counter"))[cart.dish_name]  }
     </Col>
     </div>
     <hr />
     </div>
    );
}
return("")
}

export default AddtoCartItemOrderFood;
