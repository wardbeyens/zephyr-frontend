import {
  LOAD_CLOTHES_SUCCESS,
  LOAD_USER_BY_USERNAME_SUCCES,
  CREATE_ORDER_SUCCES,
  UPDATE_ORDER_SUCCES,
  LOAD_ORDERS_BY_USERID_SUCCES,
} from "../actions";
import { combineReducers } from "redux";

const clothes = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case LOAD_CLOTHES_SUCCESS:
      return action.clothes;
    default:
      return newState;
  }
};

const user = (state = {}, action) => {
  let newState = state;
  switch (action.type) {
    case LOAD_USER_BY_USERNAME_SUCCES:
      return action.user;
    default:
      return newState;
  }
};

const orders = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case LOAD_ORDERS_BY_USERID_SUCCES:
      return action.orders;
    case CREATE_ORDER_SUCCES:
      return [...newState, action.order];
    case UPDATE_ORDER_SUCCES:
      const indexToUpdate = newState.findIndex((order) => {
        return order.uuid === action.order.uuid;
      });
      newState[indexToUpdate] = action.order;
      return newState;
    default:
      return newState;
  }
};

const reducers = combineReducers({
  clothes,
  user,
  orders,
});

export default reducers;
