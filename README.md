# Library App

This is a simple JavaScript app for managing a personal library. Users can add books, mark them as read or unread, and remove books from the library.

![Library App](library-app-demo.png)

## Features

- Add new books to the library by entering a title and author.
- Mark books as read/unread with a checkbox.
- Delete books from the library.

## How to Use

Visit the live site here: https://carisaelam-library-app.netlify.app/

OR

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/carisaelam/odin-library-app.git
   ```

2. Open `index.html` in a browser.

3. Use the "Add Book" button to reveal a form where you can add a new book by entering its title and author.

4. Once added, the book will appear as a card in the library display. You can:
   - Mark the book as read/unread using the checkbox.
   - Delete the book using the trash button.

## Code Structure

- **`Book` constructor**: Creates a book object with `title`, `author`, and `read` status.
- **Event Listeners**: Handles user interactions like adding books, toggling the sidebar, and deleting books.
- **HTML Template**: Dynamically generates book cards and inserts them into the DOM.
- **Seed Data**: Pre-populated with classic books for testing the application.

## Technologies Used

- JavaScript
- HTML/CSS
- Font Awesome (for icons)

## Future Enhancements

- Implement local storage to persist the library data between sessions.
- Add input validation to ensure valid book entries.
- Allow sorting and filtering of books.
