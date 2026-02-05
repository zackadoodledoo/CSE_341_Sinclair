import { Router } from 'express';
import controllers from '../controllers/index.js';  // adjust path if needed

const router = Router();

router.get('/', controllers.home);

export default router;
