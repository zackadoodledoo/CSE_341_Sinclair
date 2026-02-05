import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional for now)
app.use(express.json());

// Use routes
import routes from './routes/index.js';
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
