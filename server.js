import express from 'express';
import routes from './src/routes/index.js';
import { connectDB } from './src/db/connect.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/', routes);

app.listen(port, async () => {
    await connectDB();   // connect to MongoDB when server starts
    console.log(`Running on port ${port}`)
})