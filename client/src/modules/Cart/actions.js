export const GET_CART_START = 'CART/GET_START';
export const GET_CART_SUCCESS = 'CART/GET_SUCCESS';
export const GET_CART_FAIL = 'CART/GET_FAIL';

export const POST_CART_ORDERS_START = 'CART/POST_ORDERS_START';
export const POST_CART_ORDERS_SUCCESS = 'CART/POST_ORDERS_SUCCESS';
export const POST_CART_ORDERS_FAIL = 'CART/POST_ORDERS_FAIL';

export const ADD_ORDER_TO_CART = 'CART/ADD_ORDER';
export const REMOVE_ORDER_FROM_CART = 'CART/REMOVE_ORDER';
export const SET_VISIBILITY_CART_MODAL = 'CART/SET_VISIBILITY_MODAL';
export const TOGGLE_VISIBILITY_CART_MODAL = 'CART/TOGGLE_VISIBILITY_MODAL';

// const getOrdersStart = () => ({
//   type: GET_CART_START,
// });

// const getOrdersSuccess = (response) => ({
//   type: GET_CART_SUCCESS,
//   response,
// });

// const getOrdersFail = (response) => ({
//   type: GET_CART_FAIL,
//   response,
// });

const createOrdersStart = () => ({
  type: POST_CART_ORDERS_START,
});

const createOrdersSuccess = (response) => ({
  type: POST_CART_ORDERS_SUCCESS,
  response,
});

const createOrdersFail = (response) => ({
  type: POST_CART_ORDERS_FAIL,
  response,
});

export const fetchToCreateOrders = data => {
  console.log('fetchOrders', data);
  return (dispatch, state, api) => {
    dispatch(createOrdersStart());
    return api('api/orders','post', data)
      .then(response => {
        console.log(response);
        dispatch(createOrdersSuccess(response))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(createOrdersFail(err));
      });
  };
};

export const addOrderToCart = order => ({
  type: ADD_ORDER_TO_CART,
  order,
});

export const removeOrderFromCart = order => ({
  type: REMOVE_ORDER_FROM_CART,
  order,
});

export const setVisibilityCartModal = isShow => ({
  type: SET_VISIBILITY_CART_MODAL,
  isShow,
});

export const toggleVisibilityCartModal = () => ({
  type: TOGGLE_VISIBILITY_CART_MODAL,
});