import { Cart } from "../domain/entities/Cart";
import { getRedis } from "../infra";

export class CartService{
    constructor(menuRepo){
        this.menuRepo = menuRepo;
        this.redis = getRedis();
    }

    async _cartKey(userId){
        return `cart:${userId}`;
    }

    async getCart(userId){
        if(!this.redis) return new Cart(userId);
        const raw = this.redis.get(`cart:${userId}`);
        if(!raw) return new Cart(userId);
        const data = JSON.parse(raw);
        const cart=  new Cart(userId);
        cart.items = data.items;
        return cart;
    }

    async saveCart(cart){
        if(!this.redis) return;
        await this.redis.set(`cart:${cart.userId}`, JSON.stringify({items : cart.items}));
    }
    
    async addItem(userId, menuItemId, qty=1){
        const menuItem = await this.menuRepo.getItemById(menuItemId);
        if(!menuItem) throw new Error("Menu item not add");
        const cart = await this.getCart(userId);
        cart.addItem({menuItemId, name: menuItem.name, price: menuItem.price, qty});
        await this.saveCart(cart);
        return cart;
    }

    async clearCart(userId){
        await this.redis.del(`cart:${userId}`);
    }
}