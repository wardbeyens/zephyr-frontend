import myApi from "../apis/zephyr_api";

/*
 * ACTION TYPES
 */

export const LOAD_CLOTHES_SUCCESS = "LOAD_CLOTHES_SUCCESS";
export const LOAD_USER_BY_USERNAME_SUCCES = "LOAD_USER_BY_USERNAME_SUCCES";
export const LOAD_ORDERS_BY_USERID_SUCCES = "LOAD_ORDERS_BY_USERID_SUCCES";
export const CREATE_ORDER_SUCCES = "CREATE_ORDER_SUCCES";
export const UPDATE_ORDER_SUCCES = "UPDATE_ORDER_SUCCES";

/*
 * REDUX ACTION CREATORS
 */

export function loadClothesSuccess(clothes) {
  return { type: LOAD_CLOTHES_SUCCESS, clothes };
}

export function loadUserByUsernameSuccess(user) {
  return { type: LOAD_USER_BY_USERNAME_SUCCES, user };
}

export function loadOrdersByUserIDSuccess(userid) {
  return { type: LOAD_ORDERS_BY_USERID_SUCCES, userid };
}

export function createOrderSuccess(order) {
  return { type: CREATE_ORDER_SUCCES, order };
}

export function updateOrderSuccess(order) {
  return { type: UPDATE_ORDER_SUCCES, order };
}

/*
 * THUNK ACTION CREATORS
 */

export function loadClothes() {
  return (dispatch) => {
    return myApi.getAllClothes().then(
      (result) => {
        dispatch(loadClothesSuccess(result.data));
      },
      (error) => {
        throw error;
      }
    );
  };
}

export function loadUserByUsername(userName) {
  return (dispatch) => {
    return myApi.getUserByuserName(userName).then(
      (result) => {
        dispatch(loadUserByUsernameSuccess(result.data));
      },
      (error) => {
        throw error;
      }
    );
  };
}

export function loadOrdersByUserID(userid) {
  return (dispatch) => {
    return myApi.getOrderByUserID(userid).then(
      (result) => {
        dispatch(loadOrdersByUserIDSuccess(result.data));
      },
      (error) => {
        throw error;
      }
    );
  };
}

export function createOrder(order) {
  return (dispatch) => {
    return myApi.updateCategory(order).then(
      (result) => {
        dispatch(createOrderSuccess(result.data));
      },
      (error) => {
        throw error;
      }
    );
  };
}

export function updateOrder(order) {
  return (dispatch) => {
    return myApi.deleteCategory(order).then(
      (result) => {
        dispatch(updateOrderSuccess(result.data));
      },
      (error) => {
        throw error;
      }
    );
  };
}
