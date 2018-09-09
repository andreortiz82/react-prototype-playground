import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from './components/AppBar/AppBar'

import Cart from './components/Cart'
import Dragging from './components/Dragging'
import Login from './components/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar/>
          
          <Route exact path="/" component={Login} />
          <Route path="/dragging" component={Dragging} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    )
  }
}