import React, {Fragment,useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap";
import Edit from "./Edit.jsx";

function Dashboard(){


  const [resData,getResData]=useState([]);
    // constructor(props){
    //   super(props)
    //   this.state = {
    //     file: null
    //   }
    //   this.handleChange = this.handleChange.bind(this)
    // }
    //
    // handleChange(event) {
    //   this.setState({
    //     file: URL.createObjectURL(event.target.files[0])
    //   })
    // }

    // JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]
    // JSON.parse(localStorage.getItem("user"))[3]["location"]

    useEffect(() => {
      getAllResData();
    },[]);

    const getAllResData = () =>{

      Axios.defaults.headers.common.authorization=localStorage.getItem("token");
      // Axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
      Axios.post("http://13.56.184.154:3001/RestaurantLanding",{
        _id:JSON.parse(localStorage.getItem("user"))["_id"]
      })
      .then((response) => {
         // if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
           const allResData = response.data.payload;
           console.log(response.data.payload);
           getResData(allResData);
       }).catch(error =>
        console.error(error));
    }



    return (

           <div style={{width:"100rem", objectFit:"contain",background:"fixed",backgroundSize:"cover",padding:"0"}}>
             <img src={resData.picture} className="profile-img" alt="dash-img" style={{width:"1000px",height:"550px"}}/>
             <div className="row g-0" style={{width:"1000px",height:"150px"}}>
             <div className="col-md-12">
               <div className="card-body">
                   <h5 className="card-title">{`${resData.restaurantName}`}</h5>
                   <h5 className="card-text">{`${resData.location}`}</h5>
                   <h5 className="card-text">{`${resData.description}`}</h5>
                   <h5 className="card-text">{`${resData.contact}`}</h5>
                   <h5 className="card-text"><small className="text-muted">{`${resData.timings}`}</small></h5>
                 </div>
               </div>
             </div>
           </div>
        )
      }




export default Dashboard;
