import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <span className="navigation-title">{this.props.title}</span>
      </div>
    );
  }
}

export default NavBar;