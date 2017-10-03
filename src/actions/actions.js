export const SET_CARDS = 'SET_CARDS';

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  }
}

export function fetchCards() {
  return dispatch => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => dispatch(setCards(data.cards)));
  }
}
