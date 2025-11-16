export class Money {
    constructor(amount, currency = "INR"){
        if(!Number.isInteger(amount) || amount < 0) throw new Error("amount must be >= 0 (paise/rupee)");
        this.amount = amount;
        this.currency = currency;
    }
}