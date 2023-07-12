//Book Class
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }


//UI class
class UI {
    static displayBooks() {
        const StoredBooks = [
        {
            title: "Harry Potter: Goblet of Fire",
            author: "JK Rowling",
            isbn: '3434434'
        }, 
        {
            title: "Of Mice and Men",
            author: "John Stienback",
            isbn: '455445'
        }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row= document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td> 
        `;
        list.appendChild(row);
    }
}
//Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book 
