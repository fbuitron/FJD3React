import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import InfoBar from './InfoBar.js';
import PanelContainer from './PanelContainer.js';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> What!.
      //   </p>
      // </div>
      <div>
        <NavBar title="Hello World" />
        <InfoBar caption="Showing all data" />
        <PanelContainer />
      </div>
    );
  }
}

export default App;
