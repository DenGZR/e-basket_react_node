export const GET_PRODUCT_START = 'PRODUCT/GET_START';
export const GET_PRODUCT_SUCCESS = 'PRODUCT/GET_SUCCESS';
export const GET_PRODUCT_FAIL = 'PRODUCT/GET_FAIL';

const getProductStart = () => ({
  type: GET_PRODUCT_START,
});

const getProductSuccess = response => ({
  type: GET_PRODUCT_SUCCESS,
  response,
});

const getProductFail = response => ({
  type: GET_PRODUCT_FAIL,
  response,
});

export const fetchData = url => (dispatch, state, api) => {
  dispatch(getProductStart());
  return api(`api/${url}`, 'get')
    .then(response => {
      console.log(response);
      dispatch(getProductSuccess(response.data))
    })
    .catch((err) => {
      console.log('req user error!!!', err);
      dispatch(getProductFail(err));
    });
};



