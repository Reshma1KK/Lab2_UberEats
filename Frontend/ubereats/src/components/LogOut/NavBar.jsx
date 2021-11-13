import React from 'react'

function NavBar () {
  return(
    <div className="container-fluid" style={{color:"black"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className>
        <a className="navbar-brand" href="http://localhost:3000/">Home</a>
      </div>
      <div>
        <a className="navbar-brand" href="http://localhost:3000/CustomerLogin">Have an account?Sign In</a>
      </div>
    </nav>
  </div>
  );
}

export default NavBar;
