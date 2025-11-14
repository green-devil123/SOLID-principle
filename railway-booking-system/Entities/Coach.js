class Coach{
    #seats = [];
    constructor(id, type){
        this.coachId = id;
        this.type = type;
    }

    addSeat(seat){
        this.#seats.push(seat);
    }

    getSeats(){
        return this.#seats;
    }
}

module.exports = Coach;