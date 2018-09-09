import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

import './AppBar.scss'

export default class AppBar extends React.Component {
  render() {
    return (
      <div id="appbar-component">
        <img src={logo}/>
        <h1>React Prototype Playground</h1>
        <Link to="/">Login</Link>
        <Link to="/dragging">Dragging</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}
