import { GET_SERVER_AUTH } from './actions';

const initialState = {
    isLogin: false,
    role: '',
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVER_AUTH: {
        return {
          ...state,
          isLogin: !!action.payload.token,
          role: action.payload.role
        }
      }

    default: {
      return state;
    }
  }
};

export default UsersReducer;
