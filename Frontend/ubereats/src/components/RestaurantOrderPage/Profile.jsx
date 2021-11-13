import React,{Fragment,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import CustomerProfile from "./CustomerProfile.js"


function Profile() {


    const [profileData,getProfileData]=useState([]);

    useEffect(() => {
      getAllProfileData();
    },[]);
    const getAllProfileData = () => {
        Axios.defaults.headers.common.authorization=localStorage.getItem("token");
          Axios.post("http://localhost:3001/CustomerProfile",{
            name:localStorage.getItem("customer"),
          })
          .then((response) =>{
            const allProfileData = response.data.payload;
            getProfileData(allProfileData);
          }).catch(err =>
            console.log(err))
        }

  return (

              <Fragment>
                      <CustomerProfile customerInfo={profileData} />
              </Fragment>
          )
}

export default Profile;
