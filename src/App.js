import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CardPortfolio from './components/card-portfolio';
import CardForm from './components/card-form';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
    <Link className={match ? 'active item' : 'item' } to={to}>{ label }</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="container mb-3">
          <header className="header">
            <h1>React App</h1>
            <div className="navigation">
              <ActiveLink activeOnlyWhenExact to="/" label="Home" />
              <ActiveLink activeOnlyWhenExact to="/cards" label="Cards" />
              <ActiveLink activeOnlyWhenExact to="/cards/new" label="Add New Card" />
            </div>
          </header>
        </div>

        <div className="container">
          <Route exact path="/cards" component={CardPortfolio} />
          <Route exact path="/cards/new" component={CardForm} />
          <Route exact path="/card/:_id" component={CardForm} />
        </div>

      </div>
    );
  }
}

export default App;
