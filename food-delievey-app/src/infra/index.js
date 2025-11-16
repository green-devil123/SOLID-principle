import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();
let redis;

export async function initRedis() {
    if(redis) return redis;
    const url = process.env.REDIS_URL;
    if(!url){
        console.log("Url not set for redis");
        return;
    }
    redis = new Redis(url);
    redis.on('connect', () => console.log("Redis Connected"));
    redis.on('error', (r) => console.log("Error in Redis Connected"));
}

export function getRedis() {
    return redis;
}