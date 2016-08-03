export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action:
  // a JS object literal with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}