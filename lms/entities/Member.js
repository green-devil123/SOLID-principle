class Member{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book){
        this.borrowedBooks.push(book);
    }

    returnBook(bookId){
        this.borrowedBooks = this.borrowedBooks.filter(b => b.getId() !== bookId);
    }

    getBorrowBooks(){
        return this.borrowedBooks;
    }
}

module.exports = Member;