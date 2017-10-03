import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>React</h1>
          <Button color="primary" size="sm">Primary</Button>{' '}
        </header>
      </div>
    );
  }
}

export default App;
