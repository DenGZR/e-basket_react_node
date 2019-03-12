import * as ordersAction from './actions';

const initialState = {
    isLoading: false,
    data: null,
    details: null,
    selectedId: null,
};

const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersAction.GET_ORDERS_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case ordersAction.GET_ORDERS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          data: action.response
      }
    }

    case ordersAction.GET_ORDERS_FAIL: {
      return {
          ...state,
          isLoading: false,
      }
    }

    case ordersAction.GET_ORDERS_DETAILS_START: {
      return {
          ...state,
          isLoading: true,
      }
    }

  case ordersAction.GET_ORDERS_DETAILS_SUCCESS: {
    return {
        ...state,
        isLoading: false,
        details: action.response
    }
  }

  case ordersAction.GET_ORDERS_DETAILS_FAIL: {
    return {
        ...state,
        isLoading: false,
    }
  }
          
    case ordersAction.ADD_ORDER_TO_BASKET: {
      return {
          ...state,
          selectedId: [...state.selectedId, action.id],
      }
    }

    default: {
    return state;
    }
  }
};

export default OrdersReducer;
