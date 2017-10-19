export const SET_CARDS = 'SET_CARDS';
export const ADD_CARD = 'ADD_CARD';

// загрузка всех карт и генерация события SET_CARDS
export function fetchCards() {
  // МНЕ НЕ ПОНЯТНО ПОЧЕМУ МЫ ПЕРЕДАЕМ
  // здесь dispatch в функцию
  // почему просто нельзя сразу написать fetch()
  // и обращаться к серверу.
  return dispatch => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => dispatch(setCards(data.cards)));
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

// thunk actions (функции-преобразователи)

export function saveCard(data) {
  return dispatch => {
    return fetch('/api/cards', {
      // options object
      // all fields are required
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
      // данные отправлены, получаем ответ
      // handleResponse объявлена выше
    }).then(handleResponse)
    .then(data => {
      console.log(data);
      return dispatch(addCard(data.card))
    });
  }
}
