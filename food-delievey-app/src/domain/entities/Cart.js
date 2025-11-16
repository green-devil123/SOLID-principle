import { v4 as uuidv4 } from 'uuid';

export class Cart{
    constructor(userId){
        this.id= uuidv4();
        this.userId = userId;
        this.items = []; //{menuitemId, name, qty, price}
    }

    addItem(menuItem){
        const found = this.items.find(i => i.menuItemId === menuItem.menuItemId);
        if(found) found.qty += menuItem.qty;
        else this.items.push({...menuItem});
    }

    removeItem(menuItemId){
        this.items.filter(i => i.menuItemId !== menuItemId);
    }

    clear(){
        this.items = [];
    }

    totalAmount(){
        return this.items.reduce((s, it)=> s + it.price * it.qty , 0);
    }
}