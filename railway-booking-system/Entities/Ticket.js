class Ticket{
    constructor(pnr, trainId, passenger, seat){
        this.pnr = pnr;
        this.trainId = trainId;
        this.passenger = passenger;
        this.seat = seat;
    }
}

module.exports = Ticket;