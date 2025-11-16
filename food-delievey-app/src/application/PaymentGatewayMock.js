export class PaymentGatewayMock{
    constructor(){}
    async pay(orderId, amount, meta){
        return {success: true, txId: `txn_id + ${Date.now()}`, message: 'Paid'};
    }
}