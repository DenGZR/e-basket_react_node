export const GET_CART_START = 'CART/GET_START';
export const GET_CART_SUCCESS = 'CART/GET_SUCCESS';
export const GET_CART_FAIL = 'CART/GET_FAIL';

export const ADD_ORDER_TO_CART = 'CART/ADD_ORDER';
export const REMOVE_ORDER_FROM_CART = 'CART/REMOVE_ORDER';
export const SET_VISIBILITY_CART_MODAL = 'CART/SET_VISIBILITY_MODAL';
export const TOGGLE_VISIBILITY_CART_MODAL = 'CART/TOGGLE_VISIBILITY_MODAL';

export const addOrderToCart = order => ({
  type: ADD_ORDER_TO_CART,
  order,
});

export const removeOrderFromCart = order => ({
  type: REMOVE_ORDER_FROM_CART,
  order,
});

export const setVisibilityCartModal = isShow => ({
  type: SET_VISIBILITY_CART_MODAL,
  isShow,
});

export const toggleVisibilityCartModal = () => ({
  type: TOGGLE_VISIBILITY_CART_MODAL,
});