// GamesPage - prototype
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCards } from '../actions/actions';
import CardsList from './cards-list';

class CardPortfolio extends Component {

  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        <h1>Card Portfolio</h1>
        <CardsList cards={this.props.cards} />
      </div>
    );
  }
}

CardPortfolio.propTypes = {
  cards: PropTypes.array.isRequired,
  fetchCards: PropTypes.func.isRequired
}

// mapStateToProps takes some piece of state from redux store
// and pass it to component as prop
function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps, { fetchCards })(CardPortfolio);
