import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import NavigationBar from "../LogOut/NavigationBar.jsx"
import Links from "../LogOut/link.js"

function RestaurantLogin() {

    const[emailErr,setEmailErr]=useState({});
    const[passwordErr,setPasswordErr]=useState({});

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[user,setUser] = useState("");
    const[token,setToken]=useState("");
    const[restaurantStatus,setRestaurantStatus]=useState("");
    function restaurantLogin (e) {
      const headers = new Headers();
      e.preventDefault();
      const isValid = formValidation();
      if(isValid){
        // Axios.defaults.withCredentails = true;
        const user={email,password};
        Axios.defaults.withCredentials=true;
        Axios.post("http://localhost:3001/RestaurantLogin",
        user
        ).then((response) => {
        if(response.data.message){
          localStorage.setItem("isAuthenticated","false");
          setRestaurantStatus(response.data.message);
        }
        else if(response.status ===200){
          setToken(response.data.fullToken);
          console.log("fulltoken",response.data.fullToken);
          localStorage.setItem("token",response.data.fullToken);
          console.log("response.data",response.data)
          setUser(response.data.payload);
          localStorage.setItem("user", JSON.stringify(response.data.payload));
          localStorage.setItem("isAuthenticated","true");
          setRestaurantStatus("Logged In successfully!!");
          window.open("./RestaurantLanding","_self");
          console.log(JSON.stringify(response.data));
          setRestaurantStatus("Logged In successfully!");
          window.open("./RestaurantLanding","_self");
        }

        })
      }

    };
    const formValidation = () => {
      const emailErr={};
      const passwordErr={};
      let isValid=true;


      if(email.trim().length <= 0){
        emailErr.emailIsIncorrect="Please enter a e-mail to verify!";
        isValid=false;
      }
      if(password.trim().length <= 0){
        passwordErr.passwordIsShort="Please enter a password";
        isValid=false;
      }

      setEmailErr(emailErr);
      setPasswordErr(passwordErr);
      return isValid;
    }


    // then((response) => {
    //     if(user){
    //       setUser(response.data);
    //       localStorage.setItem("user", response.data)
    //       localStorage.setItem("isAuthenticated","false");
    //       setRestaurantStatus(response.data.message);
    //       console.log(response.data)
    //     }



  return (
    <div>
    <NavigationBar
       link={Links[0].href}
       name={Links[0].hrefName}
    />
      <
      h1 className = "customer-heading" > Uber < span className = "heading-eats" > Eats < /span></h1 >
      <
      h1 className = "form-floating" > Welcome Back! < /h1> <
      div className = "form-floating" >
      <
      input type = "email"
      className = "form-control"
      id = "floatingInput"
      placeholder = "name@example.com"
      name = "email"
      onChange = {
        (e) => {
          setEmail(e.target.value);
        }
      }
      / > <
      label
      htmlFor = "floatingInput" > Sign in with your email address < /label>
      {Object.keys(emailErr).map((key)=>{
        return <div style={{color:"red"}}>{emailErr[key]}</div>
      })}
      < /
      div > <
      div className = "form-floating mb-3" >
      <
      input type = "password"
      className = "form-control"
      id = "floatingPassword"
      placeholder = "Password"
      name = "password"
      onChange = {
        (e) => {
          setPassword(e.target.value);
        }
      }
      / > <
      label
      htmlFor = "floatingPassword" > Password < /label>
      {Object.keys(passwordErr).map((key)=>{
        return <div style={{color:"red"}}>{passwordErr[key]}</div>
      })}
      < /
      div > <
      div className = "d-grid gap-2 form-floating" >
      <button onClick={restaurantLogin} type = "button"
      className = "btn btn-outline-primary" > Continue< /button>
      < /
      div >
      <center>
        <h4 className="err-msg">{restaurantStatus}</h4>
      </center>
      <
      /div>
    );
    }

export default RestaurantLogin;
