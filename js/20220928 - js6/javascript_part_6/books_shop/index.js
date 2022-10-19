// books object
// get values from from onSubmit
// add book - add to books object
// every new book render books in gallery
// remove all books option
// save all books even if site is refreshed

const form = document.querySelector('form');
const booksContainer = document.querySelector('#booksContainer');
const removeBooksBtn = document.querySelector('#removeBooks');
const BOOKS = 'books';
let booksList = initBooks();

// render the books gallery on start. 
renderBooks();

// add event listener to the form 
form.addEventListener('submit', handleSubmit);
removeBooksBtn.addEventListener('click', handleRemoveAll);

// check if we have data in localStorage and if not return empty array 
function initBooks() {
    const localBooks = localStorage.getItem(BOOKS);
    if (localBooks) {
        return JSON.parse(localBooks);
    } else {
        return [];
    }
}

// take the form data and add it to the books list
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const book = getBook(form);
    addBookToList(book);
    form.reset();
}

// return book from form data
function getBook(form) {
    const book = {};
    const formData = new FormData(form);
    formData.forEach(function (value, key) {
        book[key] = value;
    });
    return book;
}

// add book obj to books array and update LS
function addBookToList(book) {
    booksList.push(book);
    updateStorage();
    renderBooks();
}

// empty the books list array and LS 
function handleRemoveAll() {
    booksList = [];
    updateStorage();
    renderBooks();
}

// updating the storage with the current value
function updateStorage(){
    const booksString = JSON.stringify(booksList);
    localStorage.setItem(BOOKS,booksString);
}

// in charge of the books gallery
function renderBooks() {
    booksContainer.innerHTML = "";
    booksList.forEach(book => {
        const newBook = createNewBook(book);
        booksContainer.appendChild(newBook);
    });
}

//create book html node  
function createNewBook(book) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-3');
    card.innerHTML = `
    <img src=${book.imageUrl} class="card-img-top" alt=${book.title} />
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">
        ${book.description}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.author}</li>
      <li class="list-group-item">${book.price} &pound;</li>
    </ul>
    `
    return card;
}