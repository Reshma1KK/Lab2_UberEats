import React from 'react';
import "../Customer/CustomerProfile.css";
import {Link} from "react-router-dom";

function CustomerProfile({customerInfo}){


  return(
     <div className="row" style={{marginTop:"50px"}}>
      <div className="col-lg-5 col-md-6">
        <div className="mb-2 customer-img">
         <img className="w-50" src={customerInfo.profile_picture} alt="customer-profile" />
        </div>
        <div className="customer-body">
        <div className="mb-2 d-flex">
          <h4 className="font-weight-bold">{`${customerInfo.name}`}</h4>
        </div>
        <div className="mb-2">
          <ul className="list-unstyled">
          <li className="media">
            <span className="w-25 text-black font-weight-bold">Nickname: </span>
            <label className="media-body">{`${customerInfo.nickname}`}</label>
          </li>
            <li className="media">
              <span className="w-25 text-black font-weight-bold">Date Of Birth:</span>
              <label className="media-body">{`${customerInfo.date_of_birth}`}</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-bold">City: </span>
              <label className="media-body">{`${customerInfo.city}`}</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-bold">State: </span>
              <label className="media-body">{`${customerInfo.state}`}</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-bold">Country: </span>
              <label className="media-body">{`${customerInfo.country}`}</label>
            </li>
            <li className="media">
              <span className="w-25 text-black font-weight-bold">Contact: </span>
              <label className="media-body">{`${customerInfo.number}`}</label>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6 pl-xl-3">
        <h5 className="font-weight-bold">About: </h5>
        <p>{`${customerInfo.about}`}</p>
        </div>
      </div>
  )
}


export default CustomerProfile;
