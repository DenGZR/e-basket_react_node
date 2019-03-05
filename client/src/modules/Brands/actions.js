export const GET_BRANDS_START = 'BRANDS/GET_START';
export const GET_BRANDS_SUCCESS = 'BRANDS/GET_SUCCESS';
export const GET_BRANDS_FAIL = 'BRANDS/GET_FAIL';

const getCatalogStart = () => ({
  type: GET_BRANDS_START,
});

const getCatalogSuccess = (response) => ({
  type: GET_BRANDS_SUCCESS,
  response,
});

const getCatalogFail = (response) => ({
  type: GET_BRANDS_FAIL,
  response,
});

export const fetchData = url => (dispatch, state, api) => {
  dispatch(getCatalogStart());
  return api(`api/${url}`, 'get')
    .then(response => {
      console.log(response);
      dispatch(getCatalogSuccess(response.data))
    })
    .catch((err) => {
      console.log('req user error!!!', err);
      dispatch(getCatalogFail(err));
    });
};



