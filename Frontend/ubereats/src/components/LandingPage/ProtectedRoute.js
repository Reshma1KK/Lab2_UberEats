import React from 'react'
import {Redirect,Route} from "react-router-dom";

function ProtectedRoute ({component : Component, ...rest}) {
  const isAuthenticated=localStorage.getItem("isAuthenticated");
  // console.log("this",isAuthenticated);

  return (
    <Route
    {...rest}
    render={(props) => {
      if(isAuthenticated) {
        return <Component />
      }
      else{
        return(
          <Redirect to={{pathname: "/", state:{from: props.location} }} />
        );
      }
    }}
    />
  );

}

export default ProtectedRoute;
