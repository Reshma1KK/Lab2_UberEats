import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants"


export const addToCart = (id,qty) => async (dispatch,getState) => {
  const { data } = await Axios.get("http://localhost:3001/AddtoCartModal")

    dispatch ({
      type: CART_ADD_ITEM,
      payload:{
        id :data.cartItems._id,
        name:data.cartItems.dish_name,
        price:data.cartItems.price,
        qty:data.cartItems.qty
      }
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}
