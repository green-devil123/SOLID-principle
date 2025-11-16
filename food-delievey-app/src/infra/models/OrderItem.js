import { DataTypes } from "sequelize";

export function defineOrderItem(sequelize){
    sequelize.define("OrderItem",{
        id:{type: DataTypes.UUID, primaryKey: true},
        orderId: {type: DataTypes.UUID, allowNull: false},
        menuItemId: {type: DataTypes.UUID, allowNull: false},
        qty: {type: DataTypes.INTEGER, allowNull: false},
        itemPrice: {type: DataTypes.INTEGER, allowNull: false},
    }, {tableName: "order_items"});
}