import { DataTypes } from "sequelize";

export function defineMenuItem(sequelize){
    sequelize.define("MenuItem",{
        id:{type: DataTypes.UUID, primaryKey: true},
        restaurantId: {type: DataTypes.UUID, allowNull: false},
        name:{type: DataTypes.STRING, allowNull: false},
        price:{type: DataTypes.INTEGER, allowNull: false},
    }, {tableName: "menu_items"});
}