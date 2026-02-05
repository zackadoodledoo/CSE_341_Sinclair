import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI is not defined. Check your .env file and dotenv.config() setup.');
}

console.log('Loaded MONGO_URI:', uri); // TEMP check

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db();
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
