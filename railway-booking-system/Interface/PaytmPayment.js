const PaymentGateway = require("./PaymentGateway");

class PaytmPayment extends PaymentGateway{
    pay(amt){
        console.log(`Amount ${amt} paid successfully`);
    }
}

module.exports = PaytmPayment;