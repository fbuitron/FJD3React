import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './VizPanel.css';
import d3Chart from './d3Chart';

class VizPanel extends Component {
  render() {
    return (
      <div className="viz-container">
      </div>
    );
  }
  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '300px',
      height: '300px'
    }, this.getChartState());
  }

  getChartState() {
      return {
        data: this.props.data,
        domain: this.props.domain
    };
  }

  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  }
  componentWillUnmount() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.destroy(el);
  }
}

export default VizPanel;