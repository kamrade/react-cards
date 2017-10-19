import React from 'react';
import PropTypes from 'prop-types';

import './card-card.css';

export default function CardCard({ card }) {

  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Card
          <small> { card._id.substr(0, 5) } </small></h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            { card.curr }
          </li>
          <li className="list-group-item">
            { card.type }
          </li>
          <li className="list-group-item">
            { card.expDate }
          </li>
        </ul>
      </div>
    </div>
  )

}

CardCard.propTypes = {

  card: PropTypes.object.isRequired

}
