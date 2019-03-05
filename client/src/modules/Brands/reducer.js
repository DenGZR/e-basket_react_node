import * as actionTypes from './actions';

const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

const BrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BRANDS_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case actionTypes.GET_BRANDS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.response
      }
    }

    case actionTypes.GET_BRANDS_FAIL: {
      return {
          ...state,
          isLoading: false,
      }
    }    

    default: {
    return state;
    }
  }
};

export default BrandsReducer;
