import React from 'react';
import PropTypes from 'prop-types';

export default function CardsList({ cards }) {

  const emptyMessage = (
    <p>There are no cards yet in your collection.</p>
  );

  const cardsList = (
    <p>Games List</p>
  );

  return (
    <div>
      { cards.length === 0 ? emptyMessage : cardsList }
    </div>
  );
}

CardsList.propTypes = {
  cards: PropTypes.array.isRequired
}
