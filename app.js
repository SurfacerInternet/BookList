// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
      const StoredBooks = [
        {
          title: 'Harry Potter',
          author: 'JK Rowling',
          isbn: '3434434'
        },
        {
          title: 'Of Mice and Men',
          author: 'John Steinback',
          isbn: '45545'
        }
      ];

  
      const books = StoredBooks;
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');
  //creating a row, by first grabbing onto an element. 
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
  }
 
  // Event: Display Books
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#book-form').addEventListener('submit', (e) => 
  {
    //Prevent real submit
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
  

    //instatiate book
    const book = new Book (title, author, isbn);

    console.log(book)
  })
})
   