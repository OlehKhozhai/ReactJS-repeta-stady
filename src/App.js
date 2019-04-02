import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    dudu: 'nn',
  };

  render() {
    const { dudu } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dudu} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
