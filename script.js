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
function cardHTML(book) {
  return `
    <div class="card">
        <div class="text__container">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.read}</p>
        </div>
        <div class="button__container">
            <button class="button delete">delete</button>
            <button class="button read">read?</button>
        </div>
    </div>
    `;
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
}

function displayBooks(library) {
  const cardContainer = document.querySelector('.card__container');
  library.forEach((book) => {
    newCard = cardHTML(book);
    cardContainer.innerHTML += newCard;
  });
}

// Create new book button to bring up a form

// Add buttons on each book card to remove book and change read status

addCurrentBooksToLibrary(books);
displayBooks(myLibrary);
