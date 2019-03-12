import _ from 'lodash';
import * as actionTypes from './actions';
import * as actionTypesOrders from '../Orders/actions';

const initialState = {
    orders: [],
    isShowModal: false,
    error: null,
};
//addToCart({description, productLink, imgSrc, price, quantity: 1})
const updateOrder = (state, action ) => {
    const { orders } = state;

    const newOrder = {
        id: action.order.productLink,
        ...action.order
    };

    let updatedItem = _.find(orders, { 'id': newOrder.id });
    if(updatedItem) {
        updatedItem.quantity = updatedItem.quantity + newOrder.quantity;
        return [ ...orders ];
    }
    return [ ...orders, newOrder ];
};

const removeOrder = (state, action ) => {
    const { orders } = state;

    return orders.filter(order => order.id !== action.order.id);
}

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesOrders.POST_ORDERS_START: {
        return {
            ...state,
            isLoading: true,
        }
      }

    case actionTypesOrders.POST_ORDERS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          orders: [],
      }
    }

    case actionTypesOrders.POST_ORDERS_FAIL: {
      return {
          ...state,
          isLoading: false,
          error: action.error,
      }
    }
          
    case actionTypes.ADD_ORDER_TO_CART: {
      return {
          ...state,
          orders: updateOrder(state, action),
      }
    }

    case actionTypes.REMOVE_ORDER_FROM_CART: {
        return {
            ...state,
            orders: removeOrder(state, action),
        }
      }
    
    case actionTypes.SET_VISIBILITY_CART_MODAL: {
      return {
          ...state,
          isShowModal: action.isShow,
      }
    }
    
    case actionTypes.TOGGLE_VISIBILITY_CART_MODAL: {
        return {
            ...state,
            isShowModal: !state.isShowModal,
        }
      }

    default: {
    return state;
    }
  }
};

export default CartReducer;
