import React, { Component } from 'react';
import './DetailPanel.css';

class DetailPanel extends Component {
  render() {
    return (
      <div className="detail-container">
        <h1 className="title">Detail</h1>
        <h2 className="subtitle">Summary</h2>
        <p>Here is the explanation of what is this</p>
      </div>
    );
  }
}

export default DetailPanel;