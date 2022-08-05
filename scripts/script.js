// attach listener event to submit button
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', (e) => { addBookToLibrary(); });

// library array
let myLibrary = [];
let myLibraryHTML = [];

// constructor for book objects
function Book(author, title, pages, isRead, indexNum) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
  this.indexNum = myLibrary.length;
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

  // clear current HTML content
  library.replaceChildren();

  // create and add new DOM element for each book
  for (const book of myLibrary) {
    // create HTML elements
    const newBook = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookIsRead = document.createElement('div');

    // add Delete Button
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('indexNum', book.indexNum);
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', (e) => { deleteBook(deleteButton.getAttribute('indexNum')); });
    deleteButton.textContent = "Delete?";
    
    // add labels for created elements
    const auth = document.createElement('div');
    const titl = document.createElement('div');
    const pges = document.createElement('div');
    const read = document.createElement('div');
    auth.classList.add('label')
    titl.classList.add('label')
    pges.classList.add('label')
    read.classList.add('label')

    // add values from book object to elements
    newBook.classList.add('content', 'shadow');
    bookAuthor.textContent = book.author;
    bookTitle.textContent = book.title;
    bookPages.textContent = book.pages;
    bookIsRead.textContent = book.isRead;
    auth.textContent = "Author:";
    titl.textContent = "Title:";
    pges.textContent = "Page Count:";
    read.textContent = "Read?";

    // add HTML elements to DOM
    library.appendChild(newBook);
    newBook.appendChild(auth);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(titl);
    newBook.appendChild(bookTitle);
    newBook.appendChild(pges);
    newBook.appendChild(bookPages);
    newBook.appendChild(read);
    newBook.appendChild(bookIsRead);
    newBook.appendChild(deleteButton);
  }
}

// Delete book function 
function deleteBook(index) {
  myLibrary.splice(index, 1);
  myLibrary.forEach((book, index)=>{book.indexNum = index;})
  console.log(myLibrary);
  updateLibrary();
};

// Some dummy content
const book1 = new Book('Gustave Flaubert', 'Madame Bovary', '329', 'Not Read', 0);
myLibrary.push(book1);
const book2 = new Book('F. Scott Fitzgerald', 'The Great Gatsby', '180', 'Read', 1);
myLibrary.push(book2);
const book3 = new Book('Chinua Achebe', 'Things Fall Apart', '209', 'Read', 2);
myLibrary.push(book3);
updateLibrary();

