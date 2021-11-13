import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { dishListReducer } from "./reducers/dishReducer"
import { restaurantListReducer } from "./reducers/dishReducer"
import { restaurantDetailsListReducer } from "./reducers/dishReducer"
import { customerDishListReducer } from "./reducers/dishReducer"
import { cartReducers } from "./reducers/cartReducer"
import { loginReducerCustomer } from "./reducers/loginReducer"

const reducer = combineReducers({
  dishList : dishListReducer,
  restaurantsList : restaurantListReducer,
  restaurantDetails : restaurantDetailsListReducer,
  customerDishesList : customerDishListReducer,
  cart : cartReducers,
  customers : loginReducerCustomer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: []


const initialState = {
  cart: { cartItems : cartItemsFromStorage },
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
