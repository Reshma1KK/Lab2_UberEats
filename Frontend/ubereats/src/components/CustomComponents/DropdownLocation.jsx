import React,{useState,useEffect,Fragment} from 'react'
import Axios from "axios"
import Location from "./Location.js"

  function DropdownLocation () {


    const [allValues,getAllValues]=useState("");

  const name = JSON.parse(localStorage["user"])["name"];

  useEffect(() => {
    getAllLocation();
  },[]);

console.log("nameloc",name)
const getAllLocation = () =>{
  Axios.defaults.headers.common.authorization = localStorage.getItem('token');
  Axios.post("http://localhost:3001/GetLocation",{
    customer_name:name
  })
  .then((response) =>{
    console.log("response for loc",response.data.payload)
    const allLoc=response.data.payload;
    getAllValues(allLoc);

}).catch(error =>
console.error(error));
}



    return (
  <>
  <Fragment>
          <Location allValues={allValues} />
  </Fragment>
  </>


    )
}

export default DropdownLocation;
