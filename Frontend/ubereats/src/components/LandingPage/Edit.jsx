import React, {
  useState,
  Fragment
} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {
  Row,
  Col
} from "react-bootstrap"
import Dashboard from "./Dashboard.jsx";

function Edit() {

  const [nameErr, setNameErr] = useState({});
  const [descriptionErr, setDescriptionErr] = useState({});

  const [file,setFile] = useState();
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [image, setImage] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newTimings, setNewTimings] = useState("");
  const [imageView,setImageView] = useState("");


const handleImageChange = (e) =>{
  if(e.target.files && e.target.files.length > 0){
    const fileName = e.target.files[0]['name'];
    console.log(e.target.files[0]['name'])
      setImage(e.target.files[0]);
  }
}

function editRestaurantImg(e) {
  const formData = new FormData();
  formData.append("originalname",image);
  console.log("image here",image)
    Axios.post("http://localhost:3001/EditImg",formData)
    .then(res =>{
      console.log(res.data.imagePath);
      setImage(res.data.imagePath);
      const imagePath = res.data.imagePath;
      Axios.defaults.headers.common.authorization = localStorage.getItem('token');
      Axios.put("http://localhost:3001/UploadImg",{
        _id:JSON.parse(localStorage.getItem("user"))["_id"],
        picture:imagePath,
      })
    })
};

  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

  const formValidation = () => {
    const nameErr = {};
    const descriptionErr = {};
    let isValid = true;


    if (stringContainsNumber(newName)) {
      nameErr.nameContainsNumerics = "Name cannot contains numerics";
      isValid = false;
    }
    if (stringContainsNumber(newDescription)) {
      descriptionErr.nameContainsNumerics = "Name cannot contains numerics";
      isValid = false;
    }

    setNameErr(nameErr);
    setDescriptionErr(descriptionErr);
    return isValid;
  }

  function editRestaurantName() {
  Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.put("http://localhost:3001/EditName", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      newName: newName
    })
    Axios.put("http://localhost:3001/EditNameinFav", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      newName: newName
    })
    Axios.put("http://localhost:3001/EditNameDishes", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      newName: newName
    })
    Axios.put("http://localhost:3001/EditNameCart", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      newName: newName
    })
    alert("Updated successfully")
  }


  function editRestaurantLocation() {
  Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.put("http://localhost:3001/EditLocation", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      resName: JSON.parse(localStorage.getItem("user"))["restaurantName"],
      newLocation: newLocation,
    })
    alert("Updated successfully")
  }


  function editRestaurantDescription() {
  Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.put("http://localhost:3001/EditDescription", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      resName: JSON.parse(localStorage.getItem("user"))["restaurantName"],
      newDescription: newDescription
    })
    alert("Updated successfully")
  }

  function editRestaurantContact() {
  Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.put("http://localhost:3001/EditContact", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      resName: JSON.parse(localStorage.getItem("user"))["restaurantName"],
      newContact: newContact
    })
    alert("Updated successfully")
  }

  function editRestaurantTimings() {
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    Axios.put("http://localhost:3001/EditTimings", {
      _id: JSON.parse(localStorage.getItem("user"))["_id"],
      resName: JSON.parse(localStorage.getItem("user"))["restaurantName"],
      newTimings: newTimings
    })
    alert("Updated successfully")
  }

  return ( <
    Fragment >
    <
    NavBar / >
    <
    h2 > {
      JSON.parse(localStorage.getItem("user"))["restaurantName"]
    } < /h2> <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "text"
    name = "newName"
    placeholder = "Restaurant"
    className = "form-control"
    defaultValue = {
      JSON.parse(localStorage.getItem("user"))["restaurantName"]
    }
    onChange = {
      (e) => {
        setNewName(e.target.value);
      }
    }
    /> <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantName
    } > ✔️ < /button> <
    /Col> <
    /Row>

    <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "text"
    name = "newLocation"
    placeholder = "Location"
    className = "form-control"
    onChange = {
      (e) => {
        setNewLocation(e.target.value);
      }
    }
    /> <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantLocation
    } > ✔️ < /button> <
    /Col> <
    /Row>

    <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "file"
    accept="image/*"
    id = "fileUpload"
    name="originalname"
    className = "form-control"
    placeholder = "image"
    onChange = {
      (e) => {
        handleImageChange(e)
      }
    }
    />
     <
    span > (jpeg, jpeg or png < /span>) <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantImg
    } > ✔️ < /button> <
    /Col> <
    /Row>

    <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "text"
    name = "newDescription"
    placeholder = "Description"
    className = "form-control"
    onChange = {
      (e) => {
        setNewDescription(e.target.value);
      }
    }
    /> <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantDescription
    } > ✔️ < /button> <
    /Col> <
    /Row>

    <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "tel"
    name = "newContact"
    placeholder = "Contact"
    className = "form-control"
    onChange = {
      (e) => {
        setNewContact(e.target.value);
      }
    }
    /> <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantContact
    } > ✔️ < /button> <
    /Col> <
    /Row>

    <
    Row style = {
      {
        margin: "100px"
      }
    } >
    <
    Col >
    <
    input type = "text"
    name = "newTimings"
    placeholder = "Timings"
    className = "form-control"
    onChange = {
      (e) => {
        setNewTimings(e.target.value);
      }
    }
    /> <
    /Col> <
    Col >
    <
    button type = "button"
    style = {
      {
        borderRadius: "100%",
        backgroundColor: "green",
        width: "30px",
        height: "20px"
      }
    }
    onClick = {
      editRestaurantTimings
    } > ✔️ < /button> <
    /Col> <
    /Row>
    <
    /Fragment>
  );

}

export default Edit;
