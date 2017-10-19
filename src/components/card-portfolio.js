// GamesPage - prototype
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCards } from '../actions/actions';
import CardsList from './cards-list';

class CardPortfolio extends Component {

  // Когда компонент отрендерился получаем все карты
  // Карты сохраняются в redux store
  // Потом мы их оттуда вынимаем с помощью mapStateToProps. См. ниже
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        <div className="mb-4">
          <h2>Card Portfolio</h2>
        </div>
        <CardsList cards={this.props.cards} />
      </div>
    );
  }
}

// Просто проверка типов
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
