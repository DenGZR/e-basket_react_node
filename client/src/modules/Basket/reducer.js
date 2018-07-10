import _ from 'lodash';
import * as ordersAction from './actions';


const initialState = {
    selectedId: []
};

const updateBasketOrders = (state, action ) => {
    const { selectedId } = state;
    const newItem = {
        id: action.id,
        quantity: action.quantity,
    };

    let updatedItem = _.find(selectedId, { 'id': newItem.id });
    if(updatedItem) {
        updatedItem.quantity = newItem.quantity;
        return [ ...selectedId ];
    }
    return [ ...selectedId, newItem ];
};

const BasketReducer = (state = initialState, action) => {
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
          data: action.response.data
      }
    }

    case ordersAction.GET_ORDERS_FAIL: {
      return {
          ...state,
          isLoading: false,
      }
    }
          
    case ordersAction.ADD_ORDER_TO_BASKET: {
        debugger;
      return {
          ...state,
          selectedId: updateBasketOrders(state, action),
      }
    }

    default: {
    return state;
    }
  }
};

export default BasketReducer;
