import { Router } from 'express';
const router = Router();
import { getReactions, getSpecificReaction, createReaction } from '../../controllers/reactionController.js';

router.route('/').get(getReactions).post(createReaction);

router.route('/:reactionId').get(getSpecificReaction);

export default router;