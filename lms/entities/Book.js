class Book{
    constructor(id, title, author){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    issueBook(){
        this.isAvailable = false;
    }

    returnBook(){
        this.isAvailable = true;
    }

    getStatus(){
        return this.isAvailable ? "AVAILABLE": "ISSUED";
    }

    getId(){
        return this.id;
    }
}

module.exports = Book;