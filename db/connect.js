import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
console.log('MONGO_URI value:', uri); // TEMP check

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
