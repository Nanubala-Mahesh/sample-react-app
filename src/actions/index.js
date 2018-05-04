export function selectBook(book) {
  console.log('A book has been selected:', book.title  );
  // select book is an ActionCreator, it need to return as action
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
