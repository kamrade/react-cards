import React from 'react';
import PropTypes from 'prop-types';
import CardCard from './card-card';

// Компонент либо отрендеривает все карты,
// либо показывает сообщение что карт в базе нет
export default function CardsList({ cards }) {

  const emptyMessage = (
    <p>There are no cards yet in your collection.</p>
  );

  const cardsList = (
    <div className="row">
      { cards.map(card => <CardCard card={card} key={card._id} />)}
    </div>
  );

  return (
    <div>
      { cards.length === 0 ? emptyMessage : cardsList }
    </div>
  );
}

// Просто проверка типов
CardsList.propTypes = {
  cards: PropTypes.array.isRequired
}
