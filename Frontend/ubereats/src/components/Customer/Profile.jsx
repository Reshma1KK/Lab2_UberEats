import React,{Fragment,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import CustomerProfile from "./CustomerProfile.jsx"
import {Link} from "react-router-dom";

function Profile() {


    const [profileData,getProfileData]=useState([]);

    useEffect(() => {
      getAllProfileData();
    },[]);

    const getAllProfileData = () => {
          Axios.defaults.headers.common.authorization = localStorage.getItem('token');
          Axios.post("http://13.56.184.154:3001/CustomerPage",{
            _id:JSON.parse(localStorage.getItem("user"))["_id"],
          })
          .then((response) =>{
            console.log("response.data.payload",response.data.payload)
            console.log("response.data.payload",response.data.payload["_id"])
            const allProfileData = response.data.payload;
            getProfileData(allProfileData);
          }).catch(err =>
            console.log(err));
        }

  return (
              <Fragment key={profileData.id}>
              <div className="row" style={{marginTop:"100px"}}>
               <div className="col-lg-5 col-md-6">
                 <div className="mb-2 customer-img">
                  <img className="w-50" src={profileData["profile_picture"]} alt="customer-profile" />
                 </div>
                 <div className="customer-body">
                 <div className="mb-2 d-flex">
                   <h4 className="font-weight-bold text-black">{`${profileData["name"]}`}</h4>
                 </div>
                 <div className="mb-2">
                   <ul className="list-unstyled">
                   <li className="media">
                     <span className="w-25 text-black font-weight-bold">Nickname: </span>
                     <label className="media-body">{`${profileData["nickname"]}`}</label>
                   </li>
                     <li className="media">
                       <span className="w-25 text-black font-weight-bold">Date Of Birth:</span>
                       <label className="media-body">{`${profileData["date_of_birth"]}`}</label>
                     </li>
                     <li className="media">
                       <span className="w-25 text-black font-weight-bold">City: </span>
                       <label className="media-body">{`${profileData["city"]}`}</label>
                     </li>
                     <li className="media">
                       <span className="w-25 text-black font-weight-bold">State: </span>
                       <label className="media-body">{`${profileData["state"]}`}</label>
                     </li>
                     <li className="media">
                       <span className="w-25 text-black font-weight-bold">Country: </span>
                       <label className="media-body">{`${profileData["country"]}`}</label>
                     </li>
                     <li className="media">
                       <span className="w-25 text-black font-weight-bold">Contact: </span>
                       <label className="media-body">{`${profileData["number"]}`}</label>
                     </li>
                   </ul>
                 </div>
                 </div>
               </div>
               <div className="col-lg-7 col-md-6 pl-xl-3">
                 <h5 className="font-weight-bold text-black">Find My Favorites: </h5>
                 <Link to="/Favorites">
                 <p><a href="http://13.56.184.154:3000/Favorites" style={{color:"black"}}>Favorites</a></p>
                 </Link>
                 <h5 className="font-weight-bold text-black">About: </h5>
                 <p>{`${profileData["about"]}`}</p>
                 <Link to="./EditCustomerProfile">
                 <button type="button" className="btn btn-warning btn-rounded btn-md">Edit</button>
                 </Link>
                 </div>
               </div>
              </Fragment>
          )
}

export default Profile;
