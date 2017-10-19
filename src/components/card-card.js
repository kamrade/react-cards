import React from 'react';
import PropTypes from 'prop-types';

export default function CardCard({ card }) {

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h4 className="card-header">Card</h4>
        <div className="card-body">
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
