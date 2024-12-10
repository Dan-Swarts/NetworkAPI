import { Router } from 'express';
const router = Router();
import { getThoughts, createThought } from '../../controllers/thoughtController.js';

router.route('/').get(getThoughts).post(createThought);

export default router;