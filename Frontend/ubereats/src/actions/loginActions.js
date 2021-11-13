import {
  RESTAURANT_LOGIN_REQUEST,
  RESTAURANT_LOGIN_SUCCESS,
  RESTAURANT_LOGIN_FAIL,
  CUSTOMER_LOGIN_REQUEST,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_FAIL,
} from '../constants/loginConstants'
import Axios from "axios"

export const listCustomer = (email,password) => async(dispatch) => {
  try{
    dispatch({
      type: CUSTOMER_LOGIN_REQUEST
    })

    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    const headers =  new Headers();
    Axios.defaults.withCredentials=true;
    const { data } = await Axios.post("http://localhost:3001/CustomerLogin",{
      email:email,
      password:password
    }, config )
    dispatch ({
      type:CUSTOMER_LOGIN_SUCCESS,
      payload: data
    })
      localStorage.setItem("user", JSON.stringify(data.payload));
      localStorage.setItem("isAuthenticated","true");
      localStorage.setItem("cartVal","");
      localStorage.setItem("token",data.fullToken);
  }catch(error){
    dispatch({
      type: CUSTOMER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}


export const listRestaurant = () => async(dispatch) => {
  try{
    dispatch({ type: RESTAURANT_LOGIN_REQUEST })
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    const { data } = await   Axios.get("http://localhost:3001/RestaurantDisplay")

    dispatch ({
      type:RESTAURANT_LOGIN_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: RESTAURANT_LOGIN_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}
