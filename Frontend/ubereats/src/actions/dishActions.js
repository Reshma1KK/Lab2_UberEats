import {
  DISHES_LIST_REQUEST,
  DISHES_LIST_SUCCESS,
  DISHES_LIST_FAIL,
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
  CUSTOMER_DISHES_LIST_REQUEST,
  CUSTOMER_DISHES_LIST_SUCCESS,
  CUSTOMER_DISHES_LIST_FAIL,
} from '../constants/dishConstants'
import Axios from "axios"

export const listDishes = () => async(dispatch) => {
  try{
    dispatch({ type: DISHES_LIST_REQUEST })
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    const { data } = await Axios.post("http://localhost:3001/Dishes",{
      res_id:JSON.parse(localStorage.getItem("user"))["_id"]
    })

    dispatch ({
      type:DISHES_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: DISHES_LIST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}


export const listRestaurants = () => async(dispatch) => {
  try{
    dispatch({ type: RESTAURANT_LIST_REQUEST })
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    const { data } = await   Axios.get("http://localhost:3001/RestaurantDisplay")

    dispatch ({
      type:RESTAURANT_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const listRestaurantDetails = () => async(dispatch) => {
  try{
    dispatch({ type: RESTAURANT_DETAILS_REQUEST })
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    const { data } = await   Axios.post("http://localhost:3001/CustomerRestaurantLanding",{
      _id:localStorage.getItem("resToOpen"),
    })

    dispatch ({
      type:RESTAURANT_DETAILS_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const listCustomerDishes = () => async(dispatch) => {
  try{
    dispatch({ type: CUSTOMER_DISHES_LIST_REQUEST })
    Axios.defaults.headers.common.authorization = localStorage.getItem('token');
    const { data } = await Axios.post("http://localhost:3001/CustomerDishes",{
      res_id:localStorage.getItem("resToOpen"),
    })

    dispatch ({
      type:CUSTOMER_DISHES_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: CUSTOMER_DISHES_LIST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}
