import express from 'express';
import { sequelize } from '../infra/sequelize.js';
import { MenuRepository } from '../infra/repositories/MenuRepository.js';
import { OrderRepository } from '../infra/repositories/OrderRepository.js';
import { CartService } from '../application/CartService.js';
import { PaymentGatewayMock } from '../application/PaymentGatewayMock.js';
import { NotifierMock } from '../application/NotifierMock.js';
import { OrderService } from '../application/OrderService.js';
import { getRedis } from '../infra/redis.js';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


// DI / Composition root for handlers
function createContext() {
    const menuRepo = new MenuRepository(sequelize);
    const orderRepo = new OrderRepository(sequelize);
    const cartService = new CartService(menuRepo);
    const paymentGateway = new PaymentGatewayMock();
    const notifier = new NotifierMock();
    const orderService = new OrderService(orderRepo, cartService, paymentGateway, notifier);
    return { menuRepo, orderRepo, cartService, orderService };
}


// Seed endpoints (dev only)
router.post('/seed', async (req, res) => {
    const { Restaurant, MenuItem, User } = sequelize.models;
    const rid = uuidv4();
    await Restaurant.create({ id: rid, name: 'Spicy House', address: 'MG Road' });
    await MenuItem.bulkCreate([
    { id: uuidv4(), restaurantId: rid, name: 'Paneer Butter Masala', price: 250 },
    { id: uuidv4(), restaurantId: rid, name: 'Veg Biryani', price: 180 }
    ]);
    await User.create({ id: uuidv4(), name: 'Tarun', email: 'tarun@example.com' });
    res.json({ ok: true });
});


// get menu
router.get('/restaurants/:rid/menu', async (req, res) => {
    const { menuRepo } = createContext();
    const items = await menuRepo.getMenuByRestaurant(req.params.rid);
    res.json(items);
});


export default router;