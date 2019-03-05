export const GET_BRAND_START = 'BRAND/GET_START';
export const GET_BRAND_SUCCESS = 'BRAND/GET_SUCCESS';
export const GET_BRAND_FAIL = 'BRAND/GET_FAIL';

const getCatalogStart = () => ({
  type: GET_BRAND_START,
});

const getCatalogSuccess = (response) => ({
  type: GET_BRAND_SUCCESS,
  response,
});

const getCatalogFail = (response) => ({
  type: GET_BRAND_FAIL,
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



