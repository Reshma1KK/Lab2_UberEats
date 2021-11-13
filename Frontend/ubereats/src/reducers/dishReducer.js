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
  CUSTOMER_DISHES_LIST_FAIL
} from "../constants/dishConstants"

export const dishListReducer = (state = { dishes:[] },action) => {

  switch(action.type){
    case 'DISHES_LIST_REQUEST':
      return{ loading: true, dishes:[] }
    case 'DISHES_LIST_SUCCESS':
      return { loading: false, dishes :action.payload.dishes }
    case 'DISHES_LIST_FAIL':
      return { loading:false, error: action.payload }
    default:
      return state
  }
}


export const restaurantListReducer = (state = { restaurant:[] }
  ,action) => {

  switch(action.type){
    case 'RESTAURANT_LIST_REQUEST':
      return{ loading: true, ...state }
    case 'RESTAURANT_LIST_SUCCESS':
      return { loading: false, restaurant :action.payload.data.data }
    case 'RESTAURANT_LIST_FAIL':
      return { loading:false, error: action.payload }
    default:
      return state
  }
}

export const restaurantDetailsListReducer = (state = { restaurants:[] }
  ,action) => {

  switch(action.type){
    case 'RESTAURANT_DETAILS_REQUEST':
      return{ loading: true, ...state }
    case 'RESTAURANT_DETAILS_SUCCESS':
      return { loading: false, restaurants :action.payload.details}
    case 'RESTAURANT_DETAILS_FAIL':
      return { loading:false, error: action.payload }
    default:
      return state
  }
}

export const customerDishListReducer = (state = { customerDishes:[] },action) => {

  switch(action.type){
    case 'CUSTOMER_DISHES_LIST_REQUEST':
      return{ loading: true, ...state }
    case 'CUSTOMER_DISHES_LIST_SUCCESS':
      return { loading: false, customerDishes :action.payload.dishes }
    case 'CUSTOMER_DISHES_LIST_FAIL':
      return { loading:false, error: action.payload }
    default:
      return state
  }
}
