import { SET_CARDS } from '../actions/actions';

export default function cards(state = [], action = {}) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards;
    default: return state;
  }
}
