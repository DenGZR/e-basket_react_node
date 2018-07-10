export const GET_ORDERS_START = 'ORDERS/GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'ORDERS/GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'ORDERS/GET_ORDERS_FAIL';

export const ADD_ORDER_TO_BASKET = 'ADD_ORDER_TO_BASKET';
export const REMOVE_ORDER_FROM_BASKET = 'REMOVE_ORDER_FROM_BASKET';

const getOrdersStart = () => ({
  type: GET_ORDERS_START,
});

const getOrdersSuccess = (response) => ({
  type: GET_ORDERS_SUCCESS,
  response,
});

const getOrdersFail = (response) => ({
  type: GET_ORDERS_FAIL,
  response,
});

export const fetchOrders = (id) => {
  console.log(id);
  return (dispatch, state, api) => {
    dispatch(getOrdersStart());
    return api('orders','get', id)
      .then(response => {
        console.log(response);
        dispatch(getOrdersSuccess(response))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(getOrdersFail(err));
      });
  };
};


