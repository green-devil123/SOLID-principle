class Seats{
    constructor(seatNumber){
        this.seatNumber = seatNumber;
        this.isBooked = false;
    }

    book(){
        if(this.isBooked) throw new Error("Seat Alread Booked");
        this.isBooked = true;
    }
}

module.exports = Seats;