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

// CLASS
class Book {
  constructor(title, author, read = false) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
    this.books = books;
  }

  // Set up delete and read event listeners
  _setupEventListeners() {
    document.querySelectorAll('.delete').forEach((button) => {
      button.addEventListener('click', (e) => {
        this._deleteBook(e);
      });
    });

    document.querySelectorAll('.read').forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
        this._toggleReadStatus(e);
      });
    });
  }

  addBookToLibrary(book) {
    this.books.push(book);
    this.displayBooks();
  }

  displayBooks() {
    cardContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      cardContainer.innerHTML += cardHTML(book, index);
    });

    this._setupEventListeners();
  }

  _toggleReadStatus(event) {
    const card = event.target.closest('.card');
    const index = card.getAttribute('data-index');
    card.classList.toggle('read');
    this.books[index].read = !this.books[index].read;
  }

  // Delete one book from library
  _deleteBook(event) {
    const card = event.target.closest('.card');
    const index = card.getAttribute('data-index');
    const deleteConfirmed = confirm('Delete book?');
    if (deleteConfirmed) {
      this.books.splice(index, 1);
      this.displayBooks();
    }
  }
}

// DOM ELEMENTS
const sidebar = document.querySelector('.sidebar');
const addBookButton = document.querySelector('.addBookButton');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addButton = document.querySelector('.form__submit');
const cardContainer = document.querySelector('.card__container');

// EVENT LISTENERS
addButton.addEventListener('click', handleAddBookClick);
addBookButton.addEventListener('click', handleAddBookButtonClick);

// EVENT HANDLERS
function handleAddBookButtonClick(e) {
  e.preventDefault();
  sidebar.classList.toggle('hidden');
}

function handleAddBookClick(e) {
  e.preventDefault();
  const newBook = new Book(titleInput.value, authorInput.value);
  myLibrary.addBookToLibrary(newBook);
  sidebar.classList.toggle('hidden');
  resetForm();
}

function resetForm() {
  titleInput.value = '';
  authorInput.value = '';
}

// Generate card HTML
function cardHTML(book, index) {
  const bookEmojis = ['📕', '📗', '📘', '📙'];
  const randomEmoji = bookEmojis[Math.floor(Math.random() * bookEmojis.length)];

  return `
      <div class="card" data-index="${index}">
          <div class="text__container">
              <h3>${randomEmoji} ${book.title}</h3>
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

const myLibrary = new Library(books);
myLibrary.displayBooks();
