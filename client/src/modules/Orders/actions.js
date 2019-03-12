export const GET_ORDERS_START = 'ORDERS/GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'ORDERS/GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'ORDERS/GET_ORDERS_FAIL';

export const GET_ORDERS_DETAILS_START = 'ORDERS/GET_DETAILS_START';
export const GET_ORDERS_DETAILS_SUCCESS = 'ORDERS/GET_DETAILS_SUCCESS';
export const GET_ORDERS_DETAILS_FAIL = 'ORDERS/GET_DETAILS_FAIL';

export const POST_ORDERS_START = 'ORDERS/POST_ORDERS_START';
export const POST_ORDERS_SUCCESS = 'ORDERS/POST_ORDERS_SUCCESS';
export const POST_ORDERS_FAIL = 'ORDERS/POST_ORDERS_FAIL';

export const ADD_ORDER_TO_BASKET = 'ADD_ORDER_TO_BASKET';
export const REMOVE_ORDER_FROM_BASKET = 'REMOVE_ORDER_FROM_BASKET';

const getOrdersStart = () => ({
  type: GET_ORDERS_START,
});

const getOrdersSuccess = response => ({
  type: GET_ORDERS_SUCCESS,
  response,
});

const getOrdersFail = error => ({
  type: GET_ORDERS_FAIL,
  error,
});

const getOrderDetailsStart = () => ({
  type: GET_ORDERS_DETAILS_START,
});

const getOrderDetailsSuccess = response => ({
  type: GET_ORDERS_DETAILS_SUCCESS,
  response,
});

const getOrderDetailsFail = error => ({
  type: GET_ORDERS_DETAILS_FAIL,
  error,
});

const postOrdersStart = () => ({
  type: POST_ORDERS_START,
});

const postOrdersSuccess = (response) => ({
  type: POST_ORDERS_SUCCESS,
  response,
});

const postOrdersFail = (response) => ({
  type: POST_ORDERS_FAIL,
  response,
});

export const loadOrders = () => {
  console.log();
  return (dispatch, state, api) => {
    dispatch(getOrdersStart());
    return api('api/orders','get')
      .then(response => {
        console.log(response);
        dispatch(getOrdersSuccess(response.data))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(getOrdersFail(err));
      });
  };
};

export const postOrders = data => {
  console.log('fetchOrders', data);
  return (dispatch, state, api) => {
    dispatch(postOrdersStart());
    return api('api/orders','post', data)
      .then(response => {
        console.log(response);
        dispatch(postOrdersSuccess(response))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(postOrdersFail(err));
      });
  };
};

export const loadOrderDetails = id => {
  console.log(id);
  return (dispatch, state, api) => {
    dispatch(getOrderDetailsStart());
    return api(`api/orders/${id}`,'get')
      .then(response => {
        console.log(response);
        dispatch(getOrderDetailsSuccess(response.data))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(getOrderDetailsFail(err));
      });
  };
};