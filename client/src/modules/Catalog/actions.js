export const GET_CATALOG_START = 'CATALOG/GET_CATALOG_START';
export const GET_CATALOG_SUCCESS = 'CATALOG/GET_CATALOG_SUCCESS';
export const GET_CATALOG_FAIL = 'CATALOG/GET_CATALOG_FAIL';

const getCatalogStart = () => ({
  type: GET_CATALOG_START,
});

const getCatalogSuccess = (response) => ({
  type: GET_CATALOG_SUCCESS,
  response,
});

const getCatalogFail = (response) => ({
  type: GET_CATALOG_FAIL,
  response,
});

export const fetchData = (url = '') => {  
  return (dispatch, state, api) => {
    dispatch(getCatalogStart());
    return api('api/catalog','post', {url: url}, { isJSON: false })
      .then(response => {
        console.log(response);
        dispatch(getCatalogSuccess(response))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
        dispatch(getCatalogFail(err));
      });
  };
};


