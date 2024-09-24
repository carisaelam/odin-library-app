const myLibrary = [];

// Seed data
const books = [
  {
    title: 'Mrs. Dalloway',
    author: 'Virginia Woolf',
    read: true,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    read: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    read: true,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    read: false,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    read: true,
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    read: false,
  },
];

// Card HTML
function cardHTML(book, index) {
  return `
    <div class="card" data-index="${index}">
        <div class="text__container">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
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

function toggleReadStatus(event) {
  const card = event.target.closest('.card');
  console.log(card);
  card.classList.toggle('read');
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

// Constructor
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
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
  console.log(`New book added: ${newBook.title}`);
  displayBooks(myLibrary);
}

function displayBooks(library) {
  const cardContainer = document.querySelector('.card__container');
  cardContainer.innerHTML = '';
  library.forEach((book, index) => {
    const newCard = cardHTML(book, index);
    cardContainer.innerHTML += newCard;
  });

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

// Create new book button to bring up a form

// Add buttons on each book card to remove book and change read status

addCurrentBooksToLibrary(books);
displayBooks(myLibrary);
