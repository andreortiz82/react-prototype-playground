import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cart from './components/Cart'
import Dragging from './components/Dragging'
import Login from './components/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Login</Link>
          <Link to="/dragging">Dragging</Link>
          <Link to="/cart">Cart</Link>
          <hr />
          <Route exact path="/" component={Login} />
          <Route path="/dragging" component={Dragging} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    )
  }
}