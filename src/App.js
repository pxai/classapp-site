import React, { Component } from 'react';

import './App.css';
import Demo from './components/Demo/Demo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="images/logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ClassApp</h1>
        </header>
        <p className="App-intro">
            Coming soon
        </p>
          <Demo classTitle="ClassApp Demo" />
      </div>
    );
  }
}

export default App;
