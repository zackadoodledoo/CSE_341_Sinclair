import dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { connectDB } from './db/connect.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, async () => {
  await connectDB();   // connect to MongoDB when server starts
  console.log(`Server running on http://localhost:${PORT}`);
});
