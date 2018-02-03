export const GET_ORDERS_START = 'ORDERS/GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'ORDERS/GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'ORDERS/GET_ORDERS_FAIL';

const getOrdersStart = () => ({
  type: GET_ORDERS_START,
});

const getOrdersSuccess = (payload) => ({
  type: GET_ORDERS_SUCCESS,
  payload: payload.response,
});

const getOrdersFail = (payload) => ({
  type: GET_ORDERS_FAIL,
  payload: payload.response,
});

export const fetchOrders = (id) => {
  console.log(id);
  return (dispatch, state, api) => {
    dispatch(getOrdersStart());
    return api('orders','get', id)
      .then(response => {
        console.log(response);
        dispatch(getOrdersSuccess({ response }))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(getOrdersFail(err));
      });
  };
};


