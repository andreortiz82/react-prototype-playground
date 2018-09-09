import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from './components/AppBar/AppBar'

import Cart from './components/Cart/Cart'
import Dragging from './components/DragDrop/DragDrop'
import Login from './components/Login/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <span role="debug"></span>
          <AppBar/>
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/dragging" component={Dragging} />
            <Route path="/cart" component={Cart} />
          </div>
        </div>
      </Router>
    )
  }
}