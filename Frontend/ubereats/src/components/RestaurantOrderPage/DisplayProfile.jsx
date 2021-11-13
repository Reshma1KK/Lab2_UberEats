import React from 'react'
import Profile from "./Profile.jsx"
import NavBar from "../LandingPage/NavBar.jsx"

function DisplayProfile(){
  return (
    <>
      <div className="row container-fluid" style={{padding:0}}>
      <NavBar />
      </div>
      <div>
      <Profile />
      </div>
    </>
  )

}

export default DisplayProfile;
