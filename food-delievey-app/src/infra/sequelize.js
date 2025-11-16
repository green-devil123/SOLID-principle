import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import { defineModels } from "./models";

dotenv.config();

let sequelize;

export async function initDb(){
    if(sequelize) return sequelize;
    const url = process.env.POSTGRES_URL;
    if(!url) throw new Error("POSTGRES URL not set");
    sequelize = new Sequelize(url);

    defineModels(sequelize);

    await sequelize.sync({alter: true});

    console.log("Postgres Connected and model synced");
    return sequelize;
}

export {sequelize};