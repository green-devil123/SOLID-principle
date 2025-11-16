import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { initDb } from './infra/sequelize.js';
import { initRedis } from './infra/redis.js';
import apiRouter from './presentation/api.js';


dotenv.config();


const PORT = process.env.PORT || 3000;


async function bootstrap() {
const app = express();
app.use(bodyParser.json());


// Initialize DB and Redis
await initDb();
await initRedis();


// API routes
app.use('/api', apiRouter);


app.listen(PORT, () => {
console.log(`Swiggy-order-system listening on port ${PORT}`);
});
}


bootstrap().catch(err => {
console.error('Failed to bootstrap', err);
process.exit(1);
});