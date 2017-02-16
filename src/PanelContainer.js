import React, { Component } from 'react';
import './PanelContainer.css';
import VizPanel from './VizPanel';
import DetailPanel from './DetailPanel.js';

class PanelContainer extends Component {
  render() {
    return (
      <div className="panel-container">
        <VizPanel />
        <div className="panel-separator" />
        <DetailPanel />
      </div>
    );
  }
}

export default PanelContainer;