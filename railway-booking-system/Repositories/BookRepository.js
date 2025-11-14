class BookRepository{

    constructor(){
        this.bookTickets = [];
    }

    createTicket(pnr, trainId, passenger, seatNumber){
        const ticket = {pnr, trainId, passenger, seatNumber};
        this.bookTickets.push(ticket);
        return ticket;
    }
}
module.exports = BookRepository;