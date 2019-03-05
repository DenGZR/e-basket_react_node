import * as actionTypes from './actions';

const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case actionTypes.GET_PRODUCT_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.response
      }
    }

    case actionTypes.GET_PRODUCT_FAIL: {
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

export default ProductReducer;
