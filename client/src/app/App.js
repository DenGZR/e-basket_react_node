import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Redirect,
  Switch,
} from 'react-router-dom';
import Auth from '../utils/auth';

import Header from './../components/Header/Header';
import UserBasketLink from './../components/UserBasketLink/UserBasketLink';
import Basket from './../modules/Basket/Basket';

import Catalog from './../modules/Catalog/Catalog';
import Orders from './../modules/Orders/Orders';
import Login from './../modules/Login/Login';
import './App.css';

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
            <UserBasketLink />
            <Switch>
              <Route exact path='/' component={Catalog}/>
              <Route path='/goods' component={Catalog}/>              
              <Route path="/login" component={Login}/>
              <Route path="/basket" component={Basket}/>
              <PrivateRoute path="/admin" component={()=> <h1>admin page!!!</h1>}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
