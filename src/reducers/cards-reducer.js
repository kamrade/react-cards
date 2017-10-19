import { SET_CARDS, ADD_CARD } from '../actions/actions';

export default function cards(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      // console.log(action.card);
      // undefined
      return [
        ...state,
        action.card
      ];
    case SET_CARDS:
      return action.cards;
    default: return state;
  }
}
