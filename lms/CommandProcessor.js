const InMemoryBookRepository = require("./repositories/InMemoryBookRepository");
const BookService = require("./service/BookService");
const LibraryService = require("./service/LibraryService");

class CommandProcessor{
    constructor(){
        const repo = new InMemoryBookRepository();
        this.bookService = new BookService(repo);
        this.libraryService = new LibraryService(repo);
    }

    execute(line){
        const [command, ...args] = line.trim().split(' ');
        switch (command) {
            case "ADD_BOOK":
                this.bookService.addBook(args[0], args[1], args[2]);
                break;
            case "REMOVE_BOOK":
                this.bookService.removeBook(args[0]);
                break;
            case "LIST_BOOKS":
                this.bookService.listBooks();
                break;
            case "REGISTER_MEMBER":
                this.libraryService.registerMember(args[0], args[1]);
                break;
            case "ISSUE_BOOK":
                this.libraryService.issueBook(args[0], args[1]);
                break;
            case "RETURN_BOOK":
                this.libraryService.returnBook(args[0], args[1]);
                break;
            case "SHOW_BORROWED":
                this.libraryService.showBorrowedBooks(args[0]);
                break;
            default:
                console.log('INVALID COMMAND');
        }
    }
}

module.exports = CommandProcessor;
