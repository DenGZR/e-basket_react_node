export const GET_SERVER_AUTH = 'AUTH/GET_LOGIN';

const getAuth = payload => ({
  type: GET_SERVER_AUTH,
  payload: payload.response
});

export const fetchUserAuth = (userData) => {
  console.log(userData);
  return (dispatch, state, api) => {
    return api('login','post', userData)
      .then(response => {
        debugger;
        dispatch(getAuth({ response }))
      })
      .catch((err) => {
        console.log('req user error!!!', err);
      });
  };
};


