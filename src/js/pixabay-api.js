const BASE_URL = 'https://66c5ea55134eb8f434961a29.mockapi.io/books';

const getBooks = () => {
  return fetch('${BASE_URL}/books', fetchUptions).then(response => {
    if (response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

const getBookById = bookId => {
  return fetch('${BASE_URL}/books/${bookId}').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

getBooks()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
getBookById(1)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
