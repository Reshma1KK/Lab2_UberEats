import {
  RESTAURANT_LOGIN_REQUEST,
  RESTAURANT_LOGIN_SUCCESS,
  RESTAURANT_LOGIN_FAIL,
  CUSTOMER_LOGIN_REQUEST,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGIN_FAIL,
  LOGOUT,
} from "../constants/loginConstants"

export const loginReducerCustomer = (state = {},
  action) => {

  switch(action.type){
    case 'CUSTOMER_LOGIN_REQUEST':
      return{ loading: true}
    case 'CUSTOMER_LOGIN_SUCCESS':
      return { loading: false, customer :action.payload.payload }
    case 'CUSTOMER_LOGIN_FAIL':
      return { loading:false, error: action.payload }
    case "LOGOUT":
      return {}
    default:
      return state
  }
}


export const loginReducerRestaurant = (state = { restaurant:[] }
  ,action) => {

  switch(action.type){
    case 'RESTAURANT_LOGIN_REQUEST':
      return{ loading: true, ...state }
    case 'RESTAURANT_LOGIN_SUCCESS':
      return { loading: false, restaurant :action.payload.payload }
    case 'RESTAURANT_LOGIN_FAIL':
      return { loading:false, error: action.payload }
    default:
      return state
  }
}
