import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CardsPortfolio from './components/card-portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <h1>React</h1>
            <Link to="/">Home</Link>
            <Link to="/cards">Cards</Link>
          </header>
          <Route exact path="/cards" component={CardsPortfolio} />
        </div>
      </div>
    );
  }
}

export default App;
