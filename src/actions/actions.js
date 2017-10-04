export const SET_CARDS = 'SET_CARDS';

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  }
}

// thunk action (функция-преобразователь)
export function saveCard(data) {
  return dispatch => {
    return fetch('/api/games', {
      // options object
      // all fields are required
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

// Вспомогательные функции
export function fetchCards() {
  return dispatch => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => dispatch(setCards(data.cards)));
  }
}
