import React, { Component } from 'react';
import './PanelContainer.css';
import VizPanel from './VizPanel';
import DetailPanel from './DetailPanel.js';

var sampleData = [
  {id: '5fbmzmtc', x: 1, y: 1, z: 6, color: "blue"},
  {id: 's4f8phwm', x: 3, y: 4, z: 9, color: "red"},
];
var sampleDomain = {x: [0, 30], y: [0, 100]};

class PanelContainer extends Component {
  render() {
    return (
      <div className="panel-container">
        <VizPanel data={sampleData} domain={sampleDomain} />
        <div className="panel-separator" />
        <DetailPanel />
      </div>
    );
  }
}

export default PanelContainer;