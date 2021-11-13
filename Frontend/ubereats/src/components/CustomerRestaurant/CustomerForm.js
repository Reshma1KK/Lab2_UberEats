import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



function CustomerForm({dash}){


  //if((JSON.parse(localStorage.getItem("user"))[0]["restaurantName"]) === (dash.restaurantName))
  return(
     <div>
      <div>
        <div style={{width:"100rem", objectFit:"contain"}}>
          <img src={dash.picture} className="profile-img" alt="dash-img" style={{width:"1000px",height:"550px"}}/>
          <div className="row g-0" style={{width:"1000px",height:"150px"}}>
          <div className="col-md-12">
            <div className="card-body">
                <h5 className="card-title">{`${dash.restaurantName}`}</h5>
                <h5 className="card-text">{`${dash.location}`}</h5>
                <h5 className="card-text">{`${dash.description}`}</h5>
                <h5 className="card-text">{`${dash.contact}`}</h5>
                <h5 className="card-text"><small className="text-muted">{`${dash.timings}`}</small></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )


}



export default CustomerForm;
