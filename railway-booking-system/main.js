const Coach = require("./Entities/Coach");
const Passenger = require("./Entities/Passenger");
const Seats = require("./Entities/Seat");
const Train = require("./Entities/Train");

const PaytmPayment = require("./Interface/PaytmPayment");
const EmailNotification = require("./Interface/EmailNotification");

const TrainService = require("./Service/TrainService");
const BookingService = require("./Service/BookingService");

const TrainRepository = require("./Repositories/TrainRepository");
const BookingRepository = require("./Repositories/BookRepository");

//Create Train
const t1 = new Train(1, "Rajdhani", "Delhi", "Mumbai");
const t2 = new Train(2, "Vaishali", "Delhi", "Bihar");

// create Coach
const c1 = new Coach("a1", "3AC");
const c2 = new Coach("a2", "2AC");

// create Seat
const s1 = new Seats(1);
const s2 = new Seats(2);

c1.addSeat(s1);
c1.addSeat(s2);

c2.addSeat(s1);
c2.addSeat(s2);

t1.addCoach(c1);
t1.addCoach(c2);

t2.addCoach(c1);
t2.addCoach(c2);

const trainRepo = new TrainRepository();
trainRepo.addTrain(t1);
trainRepo.addTrain(t2);

const trainService = new TrainService(trainRepo);

const bookingRepo = new BookingRepository();

const bookService = new BookingService(
                    trainRepo,
                    bookingRepo,
                    new PaytmPayment(),
                    new EmailNotification()
);

//Searching Train
console.log("Searching Train....");
console.log(trainService.search("Delhi", "Bihar"));

const passenger = new Passenger("Tarun", 32);

const ticket = bookService.bookTicket(2, passenger)

console.log("Ticket - ", ticket);
