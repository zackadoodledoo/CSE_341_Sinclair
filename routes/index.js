// routes/index.js
import express from 'express';
import { getData } from '../controllers/index.js';

const router = express.Router();

// Define a single route
router.get('/', getData);

export default router;
