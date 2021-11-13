import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Links from "../LogOut/link.js";



function CustomerSignup () {

  const[nameErr,setNameErr]=useState({});
  const[emailErr,setEmailErr]=useState({});
  const[passwordErr,setPasswordErr]=useState({});

  // const [customerName,setCustomerName]=useState("");


  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const customerSignup = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if(isValid){
      Axios.defaults.withCredentails = true;
      Axios.post("http://localhost:3001/CustomerSignup", {
        name:name,
        email:email,
        password:password
      }).then((response) => {
        alert("Successfully SignedUp");
        window.open("/CustomerLogin","_self");
      }).catch(err =>
        console.log(err));
    }
  }

  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

  const formValidation = () => {
    const nameErr={};
    const emailErr={};
    const passwordErr={};
    let isValid=true;

    if(stringContainsNumber(name)){
      nameErr.nameContainsNumerics="Name cannot contains numerics";
      isValid=false;
    }

    if(name.trim().length < 3){
      nameErr.nameIsShort="Name is too short";
      isValid=false;
    }

    if(name.trim().length > 20){
      nameErr.nameIsLong="Name is too long";
      isValid=false;
    }

    if(!email.includes("@")){
      emailErr.emailIsIncorrect="Please enter a valid email";
      isValid=false;
    }
    if(!email.includes(".com")){
      emailErr.emailIsIncorrect="Please enter a valid email";
      isValid=false;
    }
    if(password.trim().length < 3){
      passwordErr.passwordIsShort="Password too short";
      isValid=false;
    }
    if(!password.includes("1","2","3")){
      passwordErr.passwordIsWrong="Password must contain special characters";
      isValid=false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  }

  return(
      <div>
      <h1 className="customer-heading">Uber <span className="heading-eats">Eats</span></h1>
      <h1 className="form-floating">Customer SignUp</h1>
      <div className="form-floating">
       <input type="text" className="form-control" id="floatingName" placeholder="John Doe" name="name" onChange={(e) =>{
         setName(e.target.value);
       }} />
       <label htmlFor="floatingName">Name</label>
       {Object.keys(nameErr).map((key)=>{
         return <div style={{color:"red"}}>{nameErr[key]}</div>
       })}
      </div>
      <div className="form-floating mb-3">
       <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={(e) => {
         setEmail(e.target.value);
       }} />
       <label htmlFor="floatingInput">Email address</label>
       {Object.keys(emailErr).map((key)=>{
         return <div style={{color:"red"}}>{emailErr[key]}</div>
       })}
      </div>
      <div className="form-floating">
       <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={(e) =>{
         setPassword(e.target.value);
       }} />
       <label htmlFor="floatingPassword">Password</label>
       {Object.keys(passwordErr).map((key)=>{
         return <div style={{color:"red"}}>{passwordErr[key]}</div>
       })}
       </div>
       <div className="d-grid gap-2 form-floating">
       <button onClick={customerSignup} type="button" className="btn btn-outline-primary">Continue</button>
       </div>
       <div>
       <h2 style={{textAlign:"center",fontSize:"1.1rem", fontFamily:"Poppins'"}}>Have an Account?<a href="http://localhost:3000/CustomerLogin" style={{color:"green", fontSize:"1rem"}}>Sign In</a></h2>
       </div>
      </div>
  );
}



export default CustomerSignup;
