export function fetchCards() {
  return dispatch => {
    fetch('/api/cards');
  }
}
