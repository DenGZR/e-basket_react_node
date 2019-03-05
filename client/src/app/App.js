import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Redirect,
  Switch,
} from 'react-router-dom';
import Auth from '../utils/auth';

import Header from './../components/Header/Header';
// Cart
import UserCart from './../components/UserCart';
import CartModal from './../components/CartModal';
import Cart from './../modules/Cart';

import Brands from './../modules/Brands';
import BrandItem from './../modules/BrandItem';
import Product from './../modules/Product';
import Login from './../modules/Login/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
    Auth.isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <UserCart />
            <CartModal />
            <Switch>
              <Route exact path='/' component={Brands}/>
              <Route exact path='/brands' component={Brands}/>
              <Route exact path='/brands/:brandName' component={BrandItem}/>   
              <Route exact path='/brands/:brandName/:productName' component={Product}/> 
              <Route path="/checkout" component={Cart}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/admin" component={()=> <h1>admin page!!!</h1>}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
