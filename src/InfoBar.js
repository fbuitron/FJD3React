import React, { Component } from 'react';
import './InfoBar.css';

class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar">
        <span className="infobar-caption">{this.props.caption}</span>
      </div>
    );
  }
}

export default InfoBar;