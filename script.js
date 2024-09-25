const myLibrary = [];

// Seed data
const books = [
  {
    title: 'Mrs. Dalloway',
    author: 'Virginia Woolf',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
  },
];

// Constructor
function Book(title, author, read = false) {
  this.title = title;
  this.author = author;
  this.read = read;
}

const sidebar = document.querySelector('.sidebar');
const addBookButton = document.querySelector('.addBookButton');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.querySelector('.form__submit');
addButton.addEventListener('click', handleAddBookClick);
addBookButton.addEventListener('click', handleAddBookButtonClick);

function handleAddBookButtonClick(e) {
  e.preventDefault();
  sidebar.classList.toggle('hidden');
}

function handleAddBookClick(e) {
  e.preventDefault();
  addBookToLibrary(titleInput.value, authorInput.value);
  sidebar.classList.toggle('hidden');
  titleInput.value = '';
  authorInput.value = '';
}

// Card HTML
function cardHTML(book, index) {
  const bookEmojis = ['📕', '📗', '📘', '📙'];

  function getBookEmoji() {
    const randomIndex = Math.floor(Math.random() * bookEmojis.length);
    return bookEmojis[randomIndex];
  }

  return `
      <div class="card" data-index="${index}">
          <div class="text__container">
              <h3>${getBookEmoji()} ${book.title}</h3>
              <h4>${book.author}</h4>
          </div>
          <div class="button__container">
              <div class="checkbox__container">
                  <input id="read-${index}" type="checkbox" class="button read"></input>
                  <label for="read-${index}">Read?</label>
              </div>
              <button class="button delete"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
      `;
}

// Seeds library with current books
function addCurrentBooksToLibrary(books) {
  books.forEach((book) => {
    addBookToLibrary(book.title, book.author, book.read);
  });
}

function addBookToLibrary(title, author, read) {
  const newBook = new Book(title, author, read);
  myLibrary.push(newBook);
  displayBooks(myLibrary);
}

function displayBooks(library) {
  const cardContainer = document.querySelector('.card__container');
  cardContainer.innerHTML = '';
  library.forEach((book, index) => {
    const newCard = cardHTML(book, index);
    cardContainer.innerHTML += newCard;
  });

  function toggleReadStatus(event) {
    const card = event.target.closest('.card');
    const index = card.getAttribute('data-index');
    card.classList.toggle('read');
    myLibrary[index].read === true
      ? (myLibrary[index].read = false)
      : (myLibrary[index].read = true);
  }

  function deleteBook(event) {
    const card = event.target.closest('.card');
    const index = card.getAttribute('data-index');
    const deleteConfirmed = confirm('Delete book?');
    if (deleteConfirmed) {
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    }
  }

  document.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', deleteBook);
  });

  document.querySelectorAll('.read').forEach((checkbox) => {
    checkbox.addEventListener('click', toggleReadStatus);
  });
}

function deleteBook(event) {
  const card = event.target.closest('.card');
  const index = card.getAttribute('data-index');
  const deleteConfirmed = confirm('Delete book?');
  if (deleteConfirmed) {
    myLibrary.splice(index, 1);
    displayBooks(myLibrary);
  }
}

addCurrentBooksToLibrary(books);
// displayBooks(myLibrary);
