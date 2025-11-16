import { DataTypes } from "sequelize";

export function defineUser(sequelize){
    sequelize.define("User",{
        id:{type: DataTypes.UUID, primaryKey: true},
        name:{type: DataTypes.STRING, allowNull: false},
        email:{type: DataTypes.STRING, allowNull: true},
        phone:{type: DataTypes.STRING, allowNull: true},
    }, {tableName: "users"});
}