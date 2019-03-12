import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from '../modules/Login/reducer';
import OrdersReducer from '../modules/Orders/reducer';
import CartReducer from '../modules/Cart/reducer';
import BrandsReducer from '../modules/Brands/reducer';
import BrandItemReducer from '../modules/BrandItem/reducer';
import ProductReducer from '../modules/Product/reducer';

export default combineReducers({
  auth: LoginReducer,
  cart: CartReducer,
  form: formReducer,
  brands: BrandsReducer,
  brandItem: BrandItemReducer,
  product: ProductReducer,
  orders: OrdersReducer,
});
