class BookingService{
    constructor(trainRepo, bookRepo, paytmPayment, emailNotification){
        this.trainRepo = trainRepo;
        this.bookRepo = bookRepo;
        this.paytmPayment = paytmPayment;
        this.emailNotification = emailNotification;
    }

    bookTicket(trainId, passenger){
        const train = this.trainRepo.getTrainById(trainId);
        if(!train) throw new Error("Train Not Found");

        for(const coach of train.getCoach()){
            for(const seat of coach.getSeats()){
                if(!seat.isBooked){
                    this.paytmPayment.pay(500);
                    seat.book();
                    const pnr = Math.floor(100000000*Math.random());
                    const ticket = this.bookRepo.createTicket(pnr, trainId, passenger, seat); 
                    this.emailNotification.send(`Ticket id - ${pnr} is successfullt`);
                    return ticket;
                }
            }
        }
        throw new Error("Seats Not available");
    }
}
module.exports = BookingService;