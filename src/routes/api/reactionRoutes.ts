import { Router } from 'express';
const router = Router();
import { getReactions, createReaction } from '../../controllers/reactionController.js';

router.route('/').get(getReactions).post(createReaction);

export default router;