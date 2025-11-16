import { DataTypes } from "sequelize";

export function defineRestaurant(sequelize){
    sequelize.define("Restaurant",{
        id:{type: DataTypes.UUID, primaryKey: true},
        name:{type: DataTypes.STRING, allowNull: false},
        address:{type: DataTypes.STRING},
    }, {tableName: "restaurants"});
}