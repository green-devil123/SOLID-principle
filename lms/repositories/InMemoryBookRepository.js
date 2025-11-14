class InMemoryBookRepository{
    constructor(){
        this.books = new Map();
    }

    addBook(book){
        this.books.set(book.getId(), book);
    }

    removeBook(bookId){
        this.books.delete(bookId);
    }

    getBookById(bookId){
        return this.books.get(bookId);
    }

    getAllBooks(){
        return Array.from(this.books.values());
    }
}

module.exports = InMemoryBookRepository;