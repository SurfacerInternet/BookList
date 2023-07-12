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
}