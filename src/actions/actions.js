export const SET_CARDS = 'SET_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const CARD_FETCHED = 'CARD_FETCHED';

// загрузка всех карт и генерация события SET_CARDS
export function fetchCards() {
  return dispatch => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => dispatch(setCards(data.cards)));
  }
}

export function fetchCard(id) {
  return dispatch => {
    fetch(`/api/cards/${id}`)
      .then(res => res.json())
      .then(data => dispatch(cardFetched(data.card)));
  }
}

// обработка ответов сервера
function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  }
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}

export function cardFetched(card) {
  return {
    type: CARD_FETCHED,
    card
  }
}

// thunk actions (функции-преобразователи)

export function saveCard(data) {
  return dispatch => {
    return fetch('/api/cards', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
      // данные отправлены, получаем ответ
      // handleResponse объявлена выше
    })
    .then(handleResponse)
    .then(data => {
      return dispatch(addCard(data.card))
    });
  }
}
