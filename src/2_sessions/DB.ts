import redis from 'redis';

const url = 'redis://127.0.0.1:6379';
console.log("Session Reached")
const RedisClient = redis.createClient({
    url,
    pingInterval: 4 * 60 * 1000
});
RedisClient.on('error', err => console.log(`Success Message and variables: ${err}`));
RedisClient.on('reconnecting', params => console.log(`Error Message : ${params}`));
RedisClient.on('connect', () => console.log('Redis connected'));
RedisClient.on('ready', () => console.log('Redis ready'));
RedisClient.on('end', () => console.log('Redis connection closed'));

await RedisClient.connect();
console.log("Connected")
export {RedisClient};