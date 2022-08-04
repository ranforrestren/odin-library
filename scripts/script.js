// attach listener event to submit button
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', (e) => { addBookToLibrary(); });

// library array
let myLibrary = [];

// constructor for book objects
function Book(author, title, date, isRead) {
  this.author = author;
  this.title = title;
  this.date = date;
  this.isRead = isRead;
}

// create new book object and push to library array
function addBookToLibrary() {
  // find data on page
  const author = document.querySelector('#author');
  const title = document.querySelector('#title');
  const pages = document.querySelector('#pages');
  const isRead = document.querySelector('#isRead');

  const book = new Book(author.value, title.value, pages.value, isRead.value);
  myLibrary.push(book);
  console.log(myLibrary);
}