const Member = require("../entities/Member");

class LibraryService{
    constructor(bookRepo){
        this.bookRepo = bookRepo;
        this.members = new Map();
    }

    registerMember(id, name){
        if(!this.members.has(id)){
            // store a Member instance
            this.members.set(id, new Member(id, name));
            console.log("Member id create");
        }else{
            console.log("Member id already exists");
        }
    }

    issueBook(memberId, bookId) {
        const member = this.members.get(memberId);
        const book = this.bookRepo.getBookById(bookId);

        if (!member) return console.log('MEMBER NOT FOUND');
        if (!book) return console.log('BOOK NOT FOUND');
        if (book.getStatus() === 'ISSUED') return console.log('BOOK ALREADY ISSUED');

        book.issueBook();
        member.borrowBook(book);
        console.log(`Book "${book.title}" issued to ${member.name}.`);
    }

    returnBook(memberId, bookId){
        const member = this.members.get(memberId);
        const book = this.bookRepo.getBookById(bookId);

        if(!member){
            console.log("Member Not Found");
            return;
        }
        if(!book){
            console.log("Book Not Found");
            return;
        }

        book.returnBook();
        member.returnBook(bookId);
        console.log(`Book return ${book.title} - ${book.id} from ${member.name}`);
    }

    showBorrowedBooks(memberId){
        const member = this.members.get(memberId);
        if(!member){
            console.log("Member Not Found");
            return;
        }

        const books = member.getBorrowBooks();

        if(books.length === 0) console.log("No Borrowed Books");
        else{
            books.forEach(book => {
                console.log(`${book.id} - ${book.title} - status: ${book.getStatus()}`);
            });
        }
    }
}


module.exports = LibraryService;