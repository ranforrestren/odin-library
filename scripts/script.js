// attach listener event to submit button
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', (e) => { addBookToLibrary(); });

// library array
let myLibrary = [];

// constructor for book objects
function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
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

  // update library with new book
  updateLibrary();
}

// add HTML elements from Library to page
function updateLibrary() {
  // find HTML element to put newly created books into
  const library = document.querySelector('#library');

  for (const book of myLibrary) {
    // create HTML elements
    const newBook = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookIsRead = document.createElement('div');

    // add values from book object to elements
    bookAuthor.textContent = book.author;
    bookTitle.textContent = book.title;
    bookPages.textContent = book.pages;
    bookIsRead.textContent = book.isRead;

    // add HTML elements to DOM
    library.appendChild(newBook);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookPages);
    newBook.appendChild(bookIsRead);
  }
}
