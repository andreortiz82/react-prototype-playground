import React from 'react';
import './AppBar.css.scss'
import { Link } from "react-router-dom";

export default class AppBar extends React.Component {

  render() {
    return (
      <div id="appbar-component">
        <h1>React Component Playground</h1>
        <Link to="/">Login</Link>
        <Link to="/dragging">Dragging</Link>
        <Link to="/cart">Cart</Link>
        <hr />
      </div>
    );
  }
}
