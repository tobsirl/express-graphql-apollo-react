import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="SpaceX" style={{width: 300, display: 'block', margin: 'auto' }} />
      </div>
    );
  }
}

export default App;
