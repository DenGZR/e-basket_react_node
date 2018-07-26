import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from '../modules/Login/reducer';
import OrdersReducer from '../modules/Orders/reducer';
import BasketReducer from '../modules/Basket/reducer';
import CatalogReducer from '../modules/Catalog/reducer';

export default combineReducers({
  auth: LoginReducer,
  orders: OrdersReducer,
  basket: BasketReducer,
  form: formReducer,
  catalog: CatalogReducer,
});
