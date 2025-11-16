import { DataTypes } from "sequelize";

export function defineOrder(sequelize){
    sequelize.define("Order",{
        id:{type: DataTypes.UUID, primaryKey: true},
        userId:{type: DataTypes.UUID, allowNull: false},
        restautantId:{type: DataTypes.UUID, allowNull: false},
        totalAmount: {type: DataTypes.INTEGER, allowNull: false},
        status: {type: DataTypes.STRING, allowNull: false},
        paymentStatus: {type: DataTypes.STRING, allowNull: false},
    }, {tableName: "orders"});
}