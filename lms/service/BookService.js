const Book = require("../entities/Book");

class BookService{
    constructor(bookRepo){
        this.bookRepository = bookRepo;
    }

    addBook(id, title, author){
        const book = new Book(id, title, author);
        this.bookRepository.addBook(book);
        console.log(`Book ${title} added successfully`);
    }

    removeBook(bookId){
        this.bookRepository.removeBook(bookId);
        console.log(`Book with Id ${bookId} remove successfully`);
    }

    listBooks(){
        const books = this.bookRepository.getAllBooks();
        if(books.length === 0){
            console.log("Books not available");
            return;
        }
        books.forEach(book => {
            console.log(`${book.id} - ${book.title} - ${book.getStatus()}`)
        });
    }
}

module.exports = BookService;