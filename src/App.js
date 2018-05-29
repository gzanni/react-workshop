import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Get a haircut, Paul</h1>
        </header>
        <p className="App-intro">
          <Button> Start haircut </Button>
        </p>
      </div>
    );
  }
}

export default App;
