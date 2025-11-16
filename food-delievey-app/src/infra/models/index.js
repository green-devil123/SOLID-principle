import { defineMenuItem } from "./MenuItem";
import { defineOrder } from "./Order";
import { defineOrderItem } from "./OrderItem";
import { defineRestaurant } from "./Restaurant";
import { defineUser } from "./User";

export function defineModels(sequelize){
    defineMenuItem(sequelize);
    defineOrder(sequelize)
    defineOrderItem(sequelize);
    defineRestaurant(sequelize);
    defineUser(sequelize);

    const {User, Restaurant, MenuItem,Order, OrderItem} = sequelize.models;

    Restaurant.hasMany('MenuItem', {foreignKey: 'restaurantId'});
    MenuItem.belongsTo('Restaurant', {foreignKey: 'restaurantId'});

    User.hasMany("Order", {foreignKey : 'userId'});
    Order.belongsTo("User", {foreignKey : 'userId'});

    Order.hasMany('OrderItem', {foreignKey : 'orderId'});
    OrderItem.belongsTo("Order", {foreignKey : 'orderId'});
}