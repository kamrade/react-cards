import { SET_CARDS, ADD_CARD, CARD_FETCHED } from '../actions/actions';

export default function cards(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        action.card
      ];

    case CARD_FETCHED:
      const index = state.findIndex(item => item._id === action.card._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.card._id) return action.card;
          return item;
        });
      } else {
        return [
          ...state,
          action.card
        ]
      }

    case SET_CARDS:
      return action.cards;

    default: return state;

  }
}
