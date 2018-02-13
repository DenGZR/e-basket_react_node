import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Redirect
} from 'react-router-dom';
import Auth from '../utils/Auth';

import Header from './../components/Header/Header';
import BasketIcon from './../components/Basket/Basket';
import Orders from './../modules/Orders/Orders';
import Login from './../modules/Login/Login';
import JestSimple from './../modules/JestSimple/JestSimple';
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
            <BasketIcon />
            <Route exact path="/orders" component={Orders}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/admin" component={JestSimple}/>
          </div>
        </Router>
    );
  }
}

export default App;
