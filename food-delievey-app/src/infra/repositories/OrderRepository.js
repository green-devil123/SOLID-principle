import { where } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export class OrderRepository{
    constructor(sequelize){
        this.models = sequelize.models;
    }

    async createOrder(userId, restaurantId, totalAmount, items){
        const id = uuidv4();
        const {Order, OrderItem} = this.models;
        const order = Order.create({id, userId, restaurantId, totalAmount, status: "NEW", paymentStatus: "PENDING"});
        
        for(const it of items){
            await OrderItem.create({id: uuidv4(), orderId: id, menuItemId: it.menuItemId, qty: it.qty, itemPrice: it.price});
        }

        return order;
    }

    async updatePaymentStatus(orderId, paymentStatus){
        const {Order} = this.models;
        await Order.update({paymentStatus}, {where:{id: orderId}});
    }

    async updateOrderStatus(orderId, status){
        const {Order} = this.models;
        await Order.update({status}, {where:{id: orderId}});
    }
    getOrderById(id){
        const {Order, OrderItem} = this.models;
        Order.findByPk(orderId, {include: [OrderItem]});
    }
}