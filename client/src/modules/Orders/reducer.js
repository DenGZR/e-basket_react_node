import { GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS_FAIL } from './actions';

const initialState = {
    isLoading: false,
    data: [],
};

const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case GET_ORDERS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.payload.data
      }
    }

    case GET_ORDERS_FAIL: {
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

export default OrdersReducer;
