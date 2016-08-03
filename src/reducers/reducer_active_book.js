// state agrument here is not application state, only the state
// this reudcer is responsible for.
// (state = null) argument is ES6 syntax for: if state is undefined, set it to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}