import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from '../modules/Login/reducer';
import OrdersReducer from '../modules/Orders/reducer';

export default combineReducers({
  auth: LoginReducer,
  orders: OrdersReducer,
  form: formReducer,
});
