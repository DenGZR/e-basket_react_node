import * as actionTypes from './actions';

const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BRAND_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case actionTypes.GET_BRAND_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.response
      }
    }

    case actionTypes.GET_BRAND_FAIL: {
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

export default BrandReducer;
