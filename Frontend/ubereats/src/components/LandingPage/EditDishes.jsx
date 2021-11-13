import React,{useState,Fragment} from 'react';
import NavBar from "./NavBar.jsx";
import Axios from "axios";
import {Row,Col} from "react-bootstrap"


function EditDishes(){
  const[newDishName,setNewDishName]= useState("");
  const [newDishIngredients,setNewDishIngredients] = useState("");
  const [newDishPrice,setNewDishPrice] = useState("");
  const [newDishImg,setNewDishImg] = useState("");
  const [newDishDescription,setNewDishDescription] = useState("");
  const [newDishCategory,setNewDishCategory] = useState("");


  const handleImageChange = (e) =>{
    if(e.target.files && e.target.files.length > 0){
      const fileName = e.target.files[0]['name'];
      console.log(e.target.files[0]['name'])
        setNewDishImg(e.target.files[0]);
    }
  }



  function editDishName() {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
      Axios.put("http://13.56.184.154:3001/EditDishName",
      {
        _id:localStorage.getItem("id"),
        newDishName:newDishName
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
    function editDishImg() {
      const formData = new FormData();
      formData.append("originalname",newDishImg);
      console.log("image here",newDishImg)
        Axios.post("http://13.56.184.154:3001/AddDishImg",formData)
        .then(res =>{
          console.log(res.data.imagePath);
          setNewDishImg(res.data.imagePath);
          const imagePath = res.data.imagePath;
          Axios.defaults.headers.common.authorization = localStorage.getItem('token');
          Axios.put("http://13.56.184.154:3001/UploadDishesImg",{
            _id:localStorage.getItem("id"),
            dish_img:imagePath,
          })
        })
    };

  function editDishIngredients() {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
      Axios.put("http://13.56.184.154:3001/EditIngredients",
      {
        _id:localStorage.getItem("id"),
        newDishIngredients:newDishIngredients
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
  function editDishPrice() {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
      Axios.put("http://13.56.184.154:3001/EditPrice",
      {
        _id:localStorage.getItem("id"),
        newDishPrice:newDishPrice,
      })
      alert("Updated successfully")
      window.open("/RestaurantLanding","_self");
    }
  function editDishDescription() {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
        Axios.put("http://13.56.184.154:3001/EditDishDescription",
        {
          _id:localStorage.getItem("id"),
          newDishDescription:newDishDescription
        })
        alert("Updated successfully")
        window.open("/RestaurantLanding","_self");
      }
  function editDishCategory() {
    Axios.defaults.headers.common.authorization=localStorage.getItem("token");
        Axios.put("http://13.56.184.154:3001/EditCategory",
        {
        _id:localStorage.getItem("id"),
        newDishCategory:newDishCategory
        })
        alert("Updated successfully")
        window.open("/RestaurantLanding","_self");
      }

  return(
    <Fragment>
    <NavBar />
    <h2>{JSON.parse(localStorage.getItem("user"))["restaurantName"]}</h2>
    <Row style={{margin:"100px"}}>
    <Col>
    <input
     type="text"
     name="newDishName"
     placeholder="Dish Name"
     className="form-control"
     onChange = {
       (e) => {
         setNewDishName(e.target.value);
       }
     }
    />
    </Col>
    <Col>
      <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishName}>✔️</button>
      </Col>
      </Row>

      <Row style={{margin:"100px"}}>
      <Col>
      <input
       type="text"
       name="newDishIngredients"
       placeholder="Ingredients"
       className="form-control"
       onChange = {
         (e) => {
           setNewDishIngredients(e.target.value);
         }
       }
      />
      </Col>
      <Col>
        <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishIngredients}>✔️</button>
        </Col>
        </Row>

      <Row style={{margin:"100px"}}>
      <Col>
			<input
      type="file"
      id="fileUpload"
      className="form-control"
      placeholder="image"
      onChange={
        (e)=>
        {
          handleImageChange(e)
        }}
        />
			<span>(jpeg, jpeg or png</span>
		    )
      </Col>
      <Col>
			<button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishImg}>✔️</button>
      </Col>
      </Row>

      <Row style={{margin:"100px"}}>
      <Col>
      <input
       type="text"
       name="newDishPrice"
       placeholder="Price"
       className="form-control"
       onChange = {
         (e) => {
           setNewDishPrice(e.target.value);
         }
       }
      />
      </Col>
      <Col>
        <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishPrice}>✔️</button>
        </Col>
        </Row>

        <Row style={{margin:"100px"}}>
        <Col>
        <input
         type="text"
         name="newDishDescription"
         placeholder="Description"
         className="form-control"
         onChange = {
           (e) => {
             setNewDishDescription(e.target.value);
           }
         }
        />
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishDescription}>✔️</button>
          </Col>
          </Row>

        <Row style={{margin:"100px"}}>
        <Col>
        <input
         type="text"
         name="newDishCategory"
         placeholder="Category"
         className="form-control"
         onChange = {
           (e) => {
             setNewDishCategory(e.target.value);
           }
         }
        />
        </Col>
        <Col>
          <button type="button" style={{borderRadius:"100%",backgroundColor:"green",width:"30px",height:"20px"}} onClick={editDishCategory}>✔️</button>
          </Col>
          </Row>

    </Fragment>
  );

}

export default EditDishes;
